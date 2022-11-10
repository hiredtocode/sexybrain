import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='not-found'>
			<div>
				<img src='../assets/img/404.jpg' alt='Page not found' />
			</div>
			<Link to='/'> Back to the homepage...</Link>
		</div>
	);
};

export default NotFound;
