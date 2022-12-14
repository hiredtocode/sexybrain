import JHLogo from '../assets/img/jh-logo.png';
import JHLogoWhite from '../assets/img/jh-logo-white.png';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Logo } from './styles/Header.styled.js';

const MainLogo = () => {
	const { isDark } = useContext(ThemeContext);

	return (
		<Logo
			src={isDark ? JHLogoWhite : JHLogo}
			alt='logo'
			aria-label='Click to go to the home page'
		/>
	);
};

export default MainLogo;
