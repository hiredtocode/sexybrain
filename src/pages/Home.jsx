import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import BlogSection from '../components/BlogSection';
import Spinner from '../components/Spinner';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import { Container } from '../components/styles/Container.styled.js';
import Tags from '../components/Tags';
import Flex from '../components/styles/Flex.styled.js';
// import MostPopular from '../components/MostPopular';
// import Trending from '../components/Trending';

const Home = ({ setActive, user }) => {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState([]);
	const [tags, setTags] = useState([]);
	const blogCollectionRef = collection(db, 'blogPosts');
	// const [trendBlogs, setTrendBlogs] = useState([]);

	// const getTrendingBlogs = async () => {
	// 	const blogRef = collection(db, 'blogs');
	// 	const trendQuery = query(blogRef, where('trending', '==', 'yes'));
	// 	const querySnapshot = await getDocs(trendQuery);
	// 	let trendBlogs = [];
	// 	querySnapshot.forEach((doc) => {
	// 		trendBlogs.push({ id: doc.id, ...doc.data() });
	// 	});
	// 	setTrendBlogs(trendBlogs);
	// };

	useEffect(() => {
		// getTrendingBlogs();
		const unsub = onSnapshot(
			blogCollectionRef,
			(snapshot) => {
				let list = [];
				let tags = [];
				snapshot.docs.forEach((doc) => {
					tags.push(...doc.get('tags'));
					list.push({ id: doc.id, ...doc.data() });
				});
				const uniqueTags = [...new Set(tags)];
				setTags(uniqueTags);
				setBlogs(list);
				setLoading(false);
				setActive('home');
			},
			(error) => {
				toast.error(`There was an error ${error}`);
			}
		);

		return () => {
			unsub();
			// getTrendingBlogs();
		};
		// eslint-disable-next-line
	}, [setActive]);

	if (loading) {
		return <Spinner />;
	}

	const handleDelete = async (id) => {
		if (window.confirm('Are you sure wanted to delete that blog ?')) {
			try {
				setLoading(true);
				await deleteDoc(doc(db, 'blogPosts', id));
				toast.success('Blog deleted successfully');
				setLoading(false);
			} catch (err) {
				toast.error(`Sorry there was an error ${err}`);
			}
		}
	};
	return (
		<>
			<Flex direction={'column'}>
				<BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />
			</Flex>
			<Flex>
				<Tags tags={tags} />
			</Flex>
		</>
	);
};

export default Home;
