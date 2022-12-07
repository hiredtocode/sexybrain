import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Tags from '../components/Tags';
import { db } from '../firebase.config';
import { BlogTitleBox, Author, BlogDetail } from '../components/styles/BlogDetails.styled.js';
import Flex from '../components/styles/Flex.styled.js';
import { H2 } from '../components/styles/Title.styled.js';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import DefaultImage from '../assets/img/default.jpg';

const Detail = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		id && getBlogDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const getBlogDetail = async () => {
		const docRef = doc(db, 'blogPosts', id);
		const blogDetail = await getDoc(docRef);
		setBlog(blogDetail.data());
	};

	return (
		<div className='single' style={{ flexGrow: '1' }}>
			{/* Show default image if no image was uploaded */}
			{blog?.imgUrl ? (
				<BlogTitleBox
					style={{
						backgroundImage: `url('${blog?.imgUrl}')`,
					}}
				>
					<div className='overlay'></div>
					<div className='blog-title'>
						<span>{blog?.timestamp.toDate().toDateString()}</span>
						<H2>{blog?.title}</H2>
					</div>
				</BlogTitleBox>
			) : (
				<BlogTitleBox
					style={{
						backgroundImage: `url('${DefaultImage}')`,
					}}
				>
					<div className='overlay'></div>
					<div className='blog-title'>
						<span>{blog?.timestamp.toDate().toDateString()}</span>
						<H2>{blog?.title}</H2>
					</div>
				</BlogTitleBox>
			)}
			{/* Show default image if no image was uploaded END */}

			<BlogDetail>
				<div className='authorInfo'>
					<div>
						By <Author>{blog?.author}</Author> -&nbsp;
						{blog?.timestamp.toDate().toDateString()}
					</div>
					<Flex direction={'row'} align='center'>
						<Link to={`/update/${id}`}>
							<FontAwesomeIcon
								icon={faEdit}
								name='edit'
								style={{ cursor: 'pointer', paddingRight: '10px', textDecoration: 'none' }}
								size='2x'
								aria-label={id}
							/>
						</Link>
						<div style={{ paddingRight: '10px' }}>Tags:</div>
						<div>
							<Tags tags={blog?.tags} />
						</div>
					</Flex>
				</div>
				<ReactMarkdown rehypePlugins={[rehypeHighlight]} children={blog?.body} />
			</BlogDetail>
		</div>
	);
};

export default Detail;
