import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import BlogSection from '../components/BlogSection';
import Spinner from '../components/Spinner';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Tags from '../components/Tags';
import Flex from '../components/styles/Flex.styled.js';
import CategoryButton from '../components/styles/CategoryButton.styled';
import { TagContainer } from '../components/styles/TagSection.styled.js';
import javascript from '../assets/img/javascript.svg';
import angular from '../assets/img/angular.svg';
import html from '../assets/img/html.svg';
import typescript from '../assets/img/typescript.svg';
import react from '../assets/img/react.svg';
import css from '../assets/img/css3.svg';
import sass from '../assets/img/sass.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import materialUi from '../assets/img/material-ui.svg';
import wordpress from '../assets/img/wordpress.svg';
import styledComponents from '../assets/img/styled-components.svg';
import firebase from '../assets/img/firebase-icon.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';
import { H2 } from '../components/styles/Title.styled.js';

// import MostPopular from '../components/MostPopular';
// import Trending from '../components/Trending';

const Home = ({ setActive, user }) => {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState([]);
	const [tags, setTags] = useState([]);
	const [category, setCategory] = useState([]);
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
				const uniqueCategories = [...new Set(list.map((item) => item.category))];
				setCategory(uniqueCategories);
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
			<Flex direction={'column'} grow={1}>
				<BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />
			</Flex>
			<Flex direction={'column'} style={{ paddingLeft: '20px', maxWidth: '300px' }} grow={0.5}>
				<H2 style={{ textAlign: 'center' }}>Categories</H2>
				<Flex wrap={'wrap'} style={{ marginBottom: '50px', marginTop: '8px' }}>
					{category?.map((item, index) => {
						switch (item) {
							case 'JavaScript':
								return (
									<CategoryButton key={index}>
										<img src={javascript} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'TypeScript':
								return (
									<CategoryButton key={index}>
										<img src={typescript} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'React':
								return (
									<CategoryButton key={index}>
										<img src={react} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Angular':
								return (
									<CategoryButton key={index}>
										<img src={angular} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'CSS':
								return (
									<CategoryButton key={index}>
										<img src={css} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'HTML':
								return (
									<CategoryButton key={index}>
										<img src={html} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'SASS':
								return (
									<CategoryButton key={index}>
										<img src={sass} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Bootstrap':
								return (
									<CategoryButton key={index}>
										<img src={bootstrap} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Material UI':
								return (
									<CategoryButton key={index}>
										<img src={materialUi} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Tailwind CSS':
								return (
									<CategoryButton key={index}>
										<img src={tailwindcss} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Styled Components':
								return (
									<CategoryButton key={index}>
										<img src={styledComponents} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'What I learned':
								return (
									<CategoryButton key={index}>
										<img src={programmer} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Firebase':
								return (
									<CategoryButton key={index}>
										<img src={firebase} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Wordpress':
								return (
									<CategoryButton key={index}>
										<img src={wordpress} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
							default:
								return (
									<CategoryButton key={index}>
										<img src={question} alt={item} style={{ height: '20px' }} />
										<span>{item}</span>
									</CategoryButton>
								);
						}
					})}
				</Flex>
				<H2 style={{ textAlign: 'center' }}>Tags</H2>
				<TagContainer>
					<Tags tags={tags} />
				</TagContainer>
			</Flex>
		</>
	);
};

export default Home;
