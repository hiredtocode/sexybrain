import React from 'react';

import Card from './Card';

const BlogSection = ({ blogs, user, handleDelete }) => {
	return (
		<div>
			<h1 className=''>Blogs</h1>
			<Card blogs={blogs} user={user} handleDelete={handleDelete} />
		</div>
	);
};

export default BlogSection;
