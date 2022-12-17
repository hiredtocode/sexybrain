import { v4 as uuidv4 } from 'uuid';
import { TagButton, TagSection } from './styles/TagSection.styled.js';

const Tags = (props) => {
	const { tags, handleSelectTag } = props;

	return (
		<TagSection>
			{tags?.map((tag) => (
				<TagButton className='tag' key={uuidv4()} onClick={() => handleSelectTag(tag)}>
					<span>#</span>
					{tag}
				</TagButton>
			))}
		</TagSection>
	);
};

export default Tags;
