import Cancel from '../assets/img/cancel-button.svg';

export const CancelButton = () => {
	const handleClick = () => {
		return () => {};
	};

	return <img src={Cancel} alt='' />;
};
