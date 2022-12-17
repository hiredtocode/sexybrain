import { connect } from 'react-redux';
import { MoonIcon, SunIcon } from '../../assets/icons';
import { DarkLightContainer } from '../../components/styles/Header.styled';

const DarkLightMode = ({ mode, setDarkMode, setLightMode }) => {
	const handleClick = (mode, setDarkMode, setLightMode) => {
		return () => {
			mode === 'dark' ? setLightMode() : setDarkMode();
		};
	};

	return (
		<DarkLightContainer onClick={handleClick(mode, setDarkMode, setLightMode)}>
			{mode === 'dark' ? <MoonIcon /> : <SunIcon />}
		</DarkLightContainer>
	);
};

const mapStateToProps = state => ({
	mode: state.darkmode.mode,
});

const mapDispatchToProps = dispatch => ({
	setDarkMode: () => dispatch({ type: 'SET_DARK_MODE' }),
	setLightMode: () => dispatch({ type: 'SET_LIGHT_MODE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DarkLightMode);
