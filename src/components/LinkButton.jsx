import React from 'react';
import { LinkButtonDiv } from './styles/portfolio/ProjectContainer.styled';

function LinkButton(props) {
	const { link, title } = props;

	return (
		<LinkButtonDiv>
			<a href={link} aria-label={title} target='_blank' rel='noreferrer'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 256 256'
					style={{ width: '35px' }}
					className='icon'
				>
					<rect width='256' height='256' fill='none' />
					<polyline
						fill='none'
						stroke='#64ffda'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='16'
						points='216 100 215.992 40.008 156 40'
					/>
					<line
						x1='143.971'
						x2='215.971'
						y1='112.029'
						y2='40.029'
						fill='none'
						stroke='#64ffda'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='16'
					/>
					<path
						fill='none'
						stroke='#64ffda'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='16'
						d='M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64'
					/>
				</svg>
			</a>
		</LinkButtonDiv>
	);
}

export default LinkButton;
