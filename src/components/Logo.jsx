import JHLogo from '../assets/img/jh-logo.png';
import JHLogoWhite from '../assets/img/jh-logo-white.png';
import { Logo } from './styles/Header.styled.js';

const MainLogo = ({ mode }) => {
	return (
		<Logo
			src={mode === 'dark' ? JHLogoWhite : JHLogo}
			alt='logo'
			aria-label='Click to go to the home page'
		/>
	);
};

export default MainLogo;
