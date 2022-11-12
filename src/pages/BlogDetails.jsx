import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tags from '../components/Tags';
import { db } from '../firebase.config';

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
		<div className=''>
			<div className='' style={{ backgroundImage: `url('${blog?.imgUrl}')` }}>
				<div className='overlay'></div>
				<div className='blog-title'>
					<span>{blog?.timestamp.toDate().toDateString()}</span>
					<h2>{blog?.title}</h2>
				</div>
			</div>
			<div className=''>
				<span className=''>
					By <p className='author'>{blog?.author}</p> -&nbsp;
					{blog?.timestamp.toDate().toDateString()}
				</span>
				<p className=''>{blog?.body}</p>
			</div>
			<div className=''>
				<Tags tags={tags} />
			</div>
		</div>
	);
};

export default Detail;
