import { Link } from 'react-router-dom';
import error from '../assets/img/404.jpg';
import Flex from '../components/styles/Flex.styled.js';

const NotFound = () => {
	const fontColor = `${({ theme }) => theme.colors.font}`;

	return (
		<div className='not-found'>
			<Flex>
				<img src={error} alt='Page not found' />
			</Flex>
			<Link to='/' style={{ textDecoration: 'none', color: `${fontColor}` }}>
				Back to the homepage...
			</Link>
		</div>
	);
};

export default NotFound;
