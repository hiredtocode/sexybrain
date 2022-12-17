import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const EditPostButton = props => {
	const { post } = props;
	return (
		<Link
			to={`/update/${post.id}`}
			style={{
				cursor: 'pointer',
				paddingRight: '10px',
				textDecoration: 'none',
			}}
		>
			<FontAwesomeIcon
				icon={faEdit}
				id='edit'
				name='edit'
				size='2x'
				aria-label={post.id}
			/>
		</Link>
	);
};

export default EditPostButton;
