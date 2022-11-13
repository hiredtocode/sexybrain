import React from 'react';
import TagSection from './styles/TagSection.styled.js';

const Tags = ({ tags }) => {
	return (
		<TagSection>
			<div>
				{tags?.map((tag, index) => (
					<p className='tag' key={index}>
						{tag}
					</p>
				))}
			</div>
		</TagSection>
	);
};

export default Tags;
