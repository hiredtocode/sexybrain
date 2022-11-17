import React from 'react';
import { TagSection } from './styles/TagSection.styled.js';

const Tags = ({ tags }) => {
	return (
		<TagSection>
			{tags?.map((tag, index) => (
				<p className='tag' key={index}>
					{tag}
				</p>
			))}
		</TagSection>
	);
};

export default Tags;
