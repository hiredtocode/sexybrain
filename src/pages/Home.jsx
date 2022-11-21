import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, orderBy, onSnapshot, query } from 'firebase/firestore';
import BlogSection from '../components/BlogSection';
import Spinner from '../components/Spinner';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Tags from '../components/Tags';
import { Categories } from '../components/styles/Categories.styled.js';
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
import { Aside } from '../components/styles/CategoryContainer.styled';
import { BlogContainer } from '../components/styles/BlogContainer.styled';

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

	//This block retrieves blog posts from firebase
	useEffect(() => {
		// getTrendingBlogs();
		const unsub = onSnapshot(
			blogCollectionRef,
			(snapshot) => {
				let tags = [];
				let list = [];
				snapshot.docs.forEach((doc) => {
					tags.push(...doc.get('tags'));
					list.push({ id: doc.id, ...doc.data() });
				});
				const uniqueTags = [...new Set(tags)];
				const uniqueCategories = [...new Set(list.map((item) => item.category))];
				setCategory(uniqueCategories);
				setTags(uniqueTags);
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

	// This block makes the blog posts display by latest posts
	useEffect(() => {
		const timestamp = query(blogCollectionRef, orderBy('timestamp', 'desc'));
		const time = onSnapshot(
			timestamp,
			(snapshot) => {
				let time = [];
				snapshot.docs.forEach((doc) => {
					time.push({ ...doc.data(), id: doc.id });
				});
				setBlogs(time);
			},
			(error) => {
				toast.error(`There was an error ${error}`);
			}
		);
		return () => {
			time();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <Spinner />;
	}
	const handleDelete = async (id) => {
		if (window.confirm('Are you sure?')) {
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

	// Show posts that are only related to the clicked category when clicked
	const selectedCategory = (e) => {
		const result = blogs.filter((cat) => cat.category === e.target.innerText);
		setBlogs(result);
	};

	return (
		<>
			<BlogContainer>
				<BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />
			</BlogContainer>
			<Aside>
				<H2 style={{ textAlign: 'center' }}>Categories</H2>
				<Categories>
					{category?.map((item, index) => {
						switch (item) {
							case 'JavaScript':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={javascript} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'TypeScript':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={typescript} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'React':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={react} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Angular':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={angular} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'CSS':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={css} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'HTML':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={html} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'SASS':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={sass} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Bootstrap':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={bootstrap} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Material UI':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={materialUi} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Tailwind CSS':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={tailwindcss} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Styled Components':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={styledComponents} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'What I learned':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={programmer} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Firebase':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={firebase} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Wordpress':
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={wordpress} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							default:
								return (
									<CategoryButton key={index} onClick={selectedCategory}>
										<img src={question} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
						}
					})}
				</Categories>
				<H2 style={{ textAlign: 'center' }}>Tags</H2>
				<TagContainer>
					<Tags tags={tags} />
				</TagContainer>
			</Aside>
		</>
	);
};

export default Home;
