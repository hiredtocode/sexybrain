import React from 'react';
import Title from './styles/Title.styled.js';
import Card from './Card';

const BlogSection = ({ blogs, user, handleDelete }) => {
	return (
		<>
			<Title>Blogs</Title>

			<Card blogs={blogs} user={user} handleDelete={handleDelete} />
		</>
	);
};

export default BlogSection;
