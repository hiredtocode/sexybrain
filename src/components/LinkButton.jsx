import React from 'react';
import SquareArrowIcon from '../assets/img/square-arrow-primary.svg';

function LinkButton(props) {
	const { link, title } = props;

	return (
		<a href={link} aria-label={title} target='_blank' rel='noreferrer'>
			<img src={SquareArrowIcon} alt={title} style={{ minWidth: '35px' }} />
		</a>
	);
}

export default LinkButton;
