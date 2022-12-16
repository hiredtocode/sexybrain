import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DivContainer } from './styles/DivContainer.styled';

const ResetButton = () => {
	const { isPressed, setPressed } = useContext(ThemeContext);

	const resetClickHandler = () => {
		setPressed(false);
		console.log('isPressed:', isPressed);
	};
	return (
		<DivContainer>
			<ul>
				<li className={isPressed ? 'pressed' : ''} onClick={resetClickHandler}>
					Reset
				</li>
			</ul>
		</DivContainer>
	);
};

export default ResetButton;
