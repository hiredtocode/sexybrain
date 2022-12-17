import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeletePostButton = (props) => {
	const { post, handleDelete } = props;
	return (
		<FontAwesomeIcon
			icon={faTrash}
			id='trash'
			style={{
				cursor: 'pointer',
				paddingRight: '10px',
				textDecoration: 'none',
			}}
			size='2x'
			aria-label={post}
			onClick={handleDelete}
		/>
	);
};

export default DeletePostButton;
