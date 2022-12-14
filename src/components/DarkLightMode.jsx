import { useContext } from 'react';
import { ThemeContext } from '../App';
import { MoonIcon, SunIcon } from '../assets/icons';
import { DarkLightContainer } from '../components/styles/portfolio/ProjectContainer.styled.js';

const DarkLightMode = () => {
	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<DarkLightContainer onClick={() => setIsDark(!isDark)} aria-label='Light dark mode'>
			{isDark ? <MoonIcon /> : <SunIcon />}
		</DarkLightContainer>
	);
};

export default DarkLightMode;
