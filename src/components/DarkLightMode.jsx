import { useContext } from 'react';
import { ThemeContext } from '../App';
import { MoonIcon, SunIcon } from '../assets/icons';
import { Button } from './styles/Button.styled';

const DarkLightMode = () => {
	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<Button
			onClick={() => setIsDark(!isDark)}
			style={{
				border: 'none',
				cursor: 'pointer',
				height: '42px',
				width: '65px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			aria-label='Light dark mode'
		>
			{isDark ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
};

export default DarkLightMode;
