import React from 'react';
import { H2 } from './styles/Title.styled.js';
import Card from './Card';

const BlogSection = ({ blogs, user, handleDelete, handleUpdate }) => {
	return (
		<>
			<H2>Blogs</H2>

			<Card blogs={blogs} user={user} handleDelete={handleDelete} handleUpdate={handleUpdate} />
		</>
	);
};

export default BlogSection;
