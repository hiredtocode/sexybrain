import { DivContainer } from '../../components/styles/DivContainer.styled';
import { connect, useSelector } from 'react-redux';

const ResetButton = ({ buttonPressed, pressButton, releaseButton }) => {
	const isPressed = useSelector((state) => state.resetButton.buttonPressed);

	const handleClick = (buttonPressed, pressButton, releaseButton) => {
		return () => {
			buttonPressed ? releaseButton() : pressButton();
		};
	};

	return (
		<DivContainer onClick={handleClick(buttonPressed, pressButton, releaseButton)}>
			<ul>
				<li className={isPressed ? 'pressed' : ''}>Reset</li>
			</ul>
		</DivContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		buttonPressed: state.resetButton.buttonPressed,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		pressButton: () => dispatch({ type: 'BUTTON_PRESSED' }),
		releaseButton: () => dispatch({ type: 'BUTTON_RELEASED' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
