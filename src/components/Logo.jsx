import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import JHLogoWhite from '../assets/img/jh-logo-white.png';
import JHLogo from '../assets/img/jh-logo.png';
import { Logo } from './styles/Header.styled.js';

const MainLogo = () => {
	const mode = useSelector(state => state.darkmode.mode);

	return (
		<>
			<NavLink to='/'>
				<Logo
					src={mode === 'dark' ? JHLogoWhite : JHLogo}
					alt='logo'
					aria-label='Click to go to the home page'
				/>
			</NavLink>
		</>
	);
};

export default MainLogo;
