import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Tags from '../components/Tags';
import { db } from '../firebase.config';
import { BlogTitleBox, Author, BlogDetail } from '../components/styles/BlogDetails.styled.js';
import Flex from '../components/styles/Flex.styled.js';
import { H2 } from '../components/styles/Title.styled.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import DefaultImage from '../assets/img/default.jpg';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext } from '../App';
import remarkGfm from 'remark-gfm';
import { MarkdownContainer } from '../components/styles/BlogDetails.styled.js';

const PostDetailPage = (props) => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const { isDark } = useContext(ThemeContext);
	const { user } = props;
	const userId = user?.uid;

	console.log('userId:', userId);

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
						<span>{blog?.createdTimestamp.toDate().toDateString()}</span>
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
						<span>{blog?.createdTimestamp.toDate().toDateString()}</span>
						<H2>{blog?.title}</H2>
					</div>
				</BlogTitleBox>
			)}
			{/* Show default image if no image was uploaded END */}

			<BlogDetail>
				<div className='authorInfo'>
					<div>Written on: {blog?.createdTimestamp.toDate().toDateString()}</div>
					<div>
						{blog.lastUpdatedTimestamp ? (
							<span>Last edited: {blog.lastUpdatedTimestamp?.toDate().toDateString()}</span>
						) : null}
					</div>
					<Flex direction={'row'} align='center'>
						{userId ? (
							<Link to={`/update/${id}`}>
								<FontAwesomeIcon
									icon={faEdit}
									name='edit'
									style={{ cursor: 'pointer', paddingRight: '10px', textDecoration: 'none' }}
									size='2x'
									aria-label={id}
								/>
							</Link>
						) : null}
						<div style={{ paddingRight: '10px' }}>Tags:</div>
						<div>
							<Tags tags={blog?.tags} />
						</div>
					</Flex>
				</div>
				<MarkdownContainer>
					{isDark ? (
						<ReactMarkdown
							remarkPlugins={[remarkGfm, { singleTilde: false }]}
							children={blog?.body}
							components={{
								code({ node, inline, className, children, includeElementIndex, ...props }) {
									const match = /language-(\w+)/.exec(className || '');
									return !inline && match ? (
										<SyntaxHighlighter
											children={String(children).replace(/\n$/, '')}
											language={match[1]}
											style={oneDark}
											{...props}
										/>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									);
								},
							}}
						/>
					) : (
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							children={blog?.body}
							components={{
								code({ node, inline, className, children, includeElementIndex, ...props }) {
									const match = /language-(\w+)/.exec(className || '');
									return !inline && match ? (
										<SyntaxHighlighter
											children={String(children).replace(/\n$/, '')}
											language={match[1]}
											style={oneLight}
											{...props}
										/>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									);
								},
							}}
						/>
					)}
				</MarkdownContainer>
			</BlogDetail>
		</div>
	);
};

export default PostDetailPage;
