import { MoonIcon, SunIcon } from '../assets/icons';
import { DarkLightContainer } from './styles/Header.styled';
import { connect } from 'react-redux';

const DarkLightMode = ({ mode, setDarkMode, setLightMode }) => {
	return (
		<DarkLightContainer
			onClick={mode === 'dark' ? setLightMode : setDarkMode}
			aria-label='Light dark mode'
		>
			{mode === 'dark' ? <MoonIcon /> : <SunIcon />}
		</DarkLightContainer>
	);
};

const mapStateToProps = (state) => ({
	mode: state.mode,
});

const mapDispatchToProps = (dispatch) => ({
	setDarkMode: () => dispatch({ type: 'SET_DARK_MODE' }),
	setLightMode: () => dispatch({ type: 'SET_LIGHT_MODE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DarkLightMode);
