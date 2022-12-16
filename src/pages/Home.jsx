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
import styledComponents from '../assets/img/styledComponentsLogo.svg';
import firebase from '../assets/img/firebase-icon.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';
import { H2 } from '../components/styles/Title.styled.js';
import { Aside } from '../components/styles/CategoryContainer.styled';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import { BlogContainer } from '../components/styles/BlogContainer.styled';
import ResetButton from '../features/buttonState/ResetButton';
import { CancelButton } from '../components/CancelButton';
import Flex from '../components/styles/Flex.styled';

const Home = (props) => {
	const { user } = props;
	const [loading, setLoading] = useState(true);
	const [blogBackup, setBlogBackup] = useState([]);
	const [blogs, setBlogs] = useState(blogBackup);

	const [categories, setCategory] = useState([]);

	const [tags, setTags] = useState([]);
	const [tagReset, setTagReset] = useState(false);
	const blogCollectionRef = collection(db, 'blogPosts');

	const [selectedCategory, setSelectedCategory] = useState(null);

	//This block retrieves blog posts from firebase by latest timestamp
	useEffect(() => {
		const createdTimestamp = query(blogCollectionRef, orderBy('createdTimestamp', 'desc'));
		const fetchBlogPosts = onSnapshot(
			createdTimestamp,
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

				setBlogs(list);
				setBlogBackup(list);
			},
			(error) => {
				toast.error(`There was an error ${error}`);
			}
		);
		return () => fetchBlogPosts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <Spinner />;
	}
	const handleDelete = (id) => {
		return async () => {
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
	};

	// Show posts that are only related to the clicked category when clicked
	const handleSelectCategory = (category) => {
		return () => {
			setSelectedCategory(category);
			const result = blogBackup.filter((blog) => {
				return blog.category === category;
			});
			setBlogs(result);
		};
	};

	// Show posts that are only related to the clicked tag when clicked
	const handleSelectTag = (tag) => {
		if (tagReset) {
			setBlogs(blogBackup);
			setTagReset(false);
		} else {
			const result = blogBackup.filter((blog) => {
				return blog.tags.includes(tag);
			});
			setBlogs(result);
			setTagReset(true);
		}
	};
	const handleClose = () => {
		setBlogs(blogBackup);
		setSelectedCategory(null);
	};
	return (
		<>
			<BlogContainer>
				<H2>Blogs</H2>
				{selectedCategory && (
					<div className='selected'>
						<p>
							Selected category: <span>{selectedCategory}</span>
						</p>
						<button className='cancel' onClick={handleClose}>
							<CancelButton />
						</button>
					</div>
				)}

				<Card blogs={blogs} user={user} handleDelete={handleDelete} />
			</BlogContainer>
			<Aside>
				<H2 style={{ textAlign: 'center' }}>Categories</H2>
				<Categories>
					{categories?.map((category) => {
						switch (category) {
							case 'JavaScript':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={javascript} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'TypeScript':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={typescript} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'React':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={react} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Angular':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={angular} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'CSS':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={css} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'HTML':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={html} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'SASS':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={sass} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Bootstrap':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={bootstrap} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Material UI':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={materialUi} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Tailwind CSS':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={tailwindcss} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Styled Components':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={styledComponents} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Today I learned':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={programmer} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Firebase':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={firebase} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							case 'Wordpress':
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={wordpress} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
							default:
								return (
									<CategoryButton key={uuidv4()} onClick={handleSelectCategory(category)}>
										<img src={question} alt={category} />
										<span>{category}</span>
									</CategoryButton>
								);
						}
					})}
				</Categories>
				<H2 style={{ textAlign: 'center' }}>Tags</H2>
				<TagContainer>
					<Tags tags={tags} handleSelectTag={handleSelectTag} />
				</TagContainer>
			</Aside>
		</>
	);
};

export default Home;
