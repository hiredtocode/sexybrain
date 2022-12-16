import { DivContainer } from './styles/DivContainer.styled';
import { connect } from 'react-redux';

const ResetButton = ({ buttonPressed, pressButton, releaseButton }) => {
	console.log('buttonPressed:', buttonPressed);
	console.log('releaseButton:', releaseButton);
	console.log('pressButton:', pressButton);
	return (
		<DivContainer onClick={buttonPressed ? releaseButton : pressButton}>
			<ul>
				<li>Reset</li>
			</ul>
		</DivContainer>
	);
};

const mapStateToProps = (state) => ({
	buttonPressed: state.buttonPressed,
});

const mapDispatchToProps = (dispatch) => ({
	pressButton: () => dispatch({ type: 'BUTTON_PRESSED' }),
	releaseButton: () => dispatch({ type: 'BUTTON_RELEASED' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
