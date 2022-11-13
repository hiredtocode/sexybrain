import React from 'react';
import Title from './styles/Title.styled.js';
import Card from './Card';

const BlogSection = ({ blogs, user, handleDelete, handleUpdate }) => {
	return (
		<>
			<Title>Blogs</Title>

			<Card blogs={blogs} user={user} handleDelete={handleDelete} handleUpdate={handleUpdate} />
		</>
	);
};

export default BlogSection;
