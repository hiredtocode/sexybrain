import React from 'react';
import SquareArrowIcon from '../assets/img/square-arrow-primary.svg';

function LinkButton(props) {
	const { link, title } = props;

	return (
		<div>
			<a href={link} aria-label={title} target='_blank' rel='noreferrer'>
				<img src={SquareArrowIcon} alt={title} style={{ minWidth: '35px' }} />
			</a>
		</div>
	);
}

export default LinkButton;
