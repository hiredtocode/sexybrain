import React from 'react';
import { TagSection, TagButton } from './styles/TagSection.styled.js';

const Tags = ({ tags, handleTagClick }) => {
	return (
		<TagSection>
			{tags?.map((tag, index) => (
				<TagButton className='tag' key={index} onClick={() => handleTagClick(tag)}>
					{tag}
				</TagButton>
			))}
		</TagSection>
	);
};

export default Tags;
