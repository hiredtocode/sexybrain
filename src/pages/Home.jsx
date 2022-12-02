import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, orderBy, onSnapshot, query } from 'firebase/firestore';
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
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import { BlogContainer } from '../components/styles/BlogContainer.styled';
// import MostPopular from '../components/MostPopular';
// import Trending from '../components/Trending';

const Home = (props) => {
	const { setActive, user, handleUpdate } = props;
	const [loading, setLoading] = useState(true);
	const [blogBackup, setBlogBackup] = useState([]);
	const [blogs, setBlogs] = useState(blogBackup);

	const [category, setCategory] = useState([]);
	const [categoryReset, setCategoryReset] = useState(false);

	const [tags, setTags] = useState([]);
	const [tagReset, setTagReset] = useState(false);
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

	//This block retrieves blog posts from firebase by latest timestamp
	useEffect(() => {
		const timestamp = query(blogCollectionRef, orderBy('timestamp', 'desc'));
		const list = onSnapshot(
			timestamp,
			(snapshot) => {
				let tags = [];
				let list = [];
				snapshot.docs.forEach((doc) => {
					tags.push(...doc.get('tags'));
					list.push({ ...doc.data(), id: doc.id });
				});
				const uniqueTags = [...new Set(tags)];
				const uniqueCategories = [...new Set(list.map((item) => item.category))];
				setCategory(uniqueCategories);
				setTags(uniqueTags);
				setLoading(false);
				setActive('home');
				setBlogs(list);
				setBlogBackup(list);
			},
			(error) => {
				toast.error(`There was an error ${error}`);
			}
		);
		return () => list();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setActive]);

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
	const selectedCategory = (selectedCategory) => {
		if (categoryReset) {
			setBlogs(blogBackup);
			setCategoryReset(false);
		} else {
			const result = blogBackup.filter((blog) => {
				return blog.category === selectedCategory;
			});
			setBlogs(result);
			setCategoryReset(true);
		}
	};

	// Show posts that are only related to the clicked tag when clicked
	const selectedTag = (selectedTag) => {
		if (tagReset) {
			setBlogs(blogBackup);
			setTagReset(false);
		} else {
			const result = blogBackup.filter((blog) => {
				return blog.tags.includes(selectedTag);
			});
			setBlogs(result);
			setTagReset(true);
		}
	};
	return (
		<>
			<BlogContainer>
				<H2>Blogs</H2>
				<Card blogs={blogs} user={user} handleDelete={handleDelete} handleUpdate={handleUpdate} />
			</BlogContainer>
			<Aside>
				<H2 style={{ textAlign: 'center' }}>Categories</H2>
				<Categories>
					{category?.map((item) => {
						switch (item) {
							case 'JavaScript':
								return (
									<CategoryButton
										key={uuidv4()}
										onClick={() => {
											selectedCategory(item, uuidv4());
										}}
									>
										<img src={javascript} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'TypeScript':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={typescript} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'React':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={react} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Angular':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={angular} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'CSS':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={css} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'HTML':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={html} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'SASS':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={sass} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Bootstrap':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={bootstrap} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Material UI':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={materialUi} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Tailwind CSS':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={tailwindcss} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Styled Components':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={styledComponents} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'What I learned':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={programmer} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Firebase':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={firebase} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							case 'Wordpress':
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={wordpress} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
							default:
								return (
									<CategoryButton key={uuidv4()} onClick={() => selectedCategory(item)}>
										<img src={question} alt={item} />
										<span>{item}</span>
									</CategoryButton>
								);
						}
					})}
				</Categories>
				<H2 style={{ textAlign: 'center' }}>Tags</H2>
				<TagContainer>
					<Tags tags={tags} handleTagClick={selectedTag} />
				</TagContainer>
			</Aside>
		</>
	);
};

export default Home;
