import { NavLink } from 'react-router-dom';

const ResumeButton = () => {
	return (
		<NavLink to='/resume'>
			<span>이력서</span>
		</NavLink>
	);
};

export default ResumeButton;
