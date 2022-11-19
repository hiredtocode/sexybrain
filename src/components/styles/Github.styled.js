import styled from 'styled-components';

export const GithubIconBlack = styled.img`
	width: 55px;
	height: 55px;

	&:hover {
		opacity: 1;
	}
`;

export const GithubIconWhite = styled.img`
	border-radius: 50px;
	position: absolute;
	transition: 0.6s;
	opacity: 0;
	width: 55px;
	height: 55px;
	background: white;

	&:hover {
		opacity: 1;
	}
`;

export const GithubIconContainer = styled.a`
	position: relative;
	align-items: center;
`;
