import { collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import BlogSection from '../components/BlogSection';
import Spinner from '../components/Spinner';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Tags from '../components/Tags';
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
				console.log(error);
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
				console.log(err);
			}
		}
	};
	return (
		<div className='home'>
			{/* {error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title='Awesome Blog!' />} */}
			<div className='container-fluid pb-4 pt-4 padding'>
				<div className='container padding'>
					<div className='row mx-0'>
						<div className='col-md-8'>
							<BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />
						</div>
						<div className='col-md-3'>
							<Tags tags={tags} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
