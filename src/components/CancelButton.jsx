import { Div } from '../components/styles/Container.styled.js';
import Cancel from '../assets/img/cancel-button.svg';

export const CancelButton = () => {
	const handleClick = () => {
		return () => {};
	};

	return (
		<Div onClick={handleClick} aria-label='Light dark mode'>
			<img src={Cancel} alt='' />
		</Div>
	);
};
