import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tags from '../components/Tags';
import { db } from '../firebase.config';
import { BlogTitleBox, Author, BlogDetail } from '../components/styles/BlogDetails.styled.js';
import Post from '../components/markdown_component/post.js';
import Flex from '../components/styles/Flex.styled.js';

const Detail = ({ setActive }) => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [blogs, setBlogs] = useState([]);
	const [tags, setTags] = useState([]);

	useEffect(() => {
		const getBlogsData = async () => {
			const blogRef = collection(db, 'blogPosts');
			const blogs = await getDocs(blogRef);
			setBlogs(blogs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			let tags = [];
			blogs.docs.map((doc) => tags.push(...doc.get('tags')));
			let uniqueTags = [...new Set(tags)];
			setTags(uniqueTags);
		};

		getBlogsData();
	}, []);

	useEffect(() => {
		id && getBlogDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const getBlogDetail = async () => {
		const docRef = doc(db, 'blogPosts', id);
		const blogDetail = await getDoc(docRef);
		setBlog(blogDetail.data());
		setActive(null);
	};
	return (
		<div className='single' style={{ flexGrow: '1' }}>
			<BlogTitleBox style={{ backgroundImage: `url('${blog?.imgUrl}')` }}>
				<div className='overlay'></div>
				<div className='blog-title'>
					<span>{blog?.timestamp.toDate().toDateString()}</span>
					<h2>{blog?.title}</h2>
				</div>
			</BlogTitleBox>
			<BlogDetail>
				<div className='authorInfo'>
					<div>
						By <Author>{blog?.author}</Author> -&nbsp;
						{blog?.timestamp.toDate().toDateString()}
					</div>
					<Flex direction={'row'} align='center'>
						<div style={{ paddingRight: '10px' }}>Tags:</div>
						<div>
							<Tags tags={blog?.tags} />
						</div>
					</Flex>
				</div>
				<p>{blog?.body}</p>
				<Post />
			</BlogDetail>
		</div>
	);
};

export default Detail;
