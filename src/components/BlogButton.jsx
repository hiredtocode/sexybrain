import { NavLink } from 'react-router-dom';

const BlogButton = () => {
	return (
		<NavLink to='/'>
			<span>블로그</span>
		</NavLink>
	);
};

export default BlogButton;
