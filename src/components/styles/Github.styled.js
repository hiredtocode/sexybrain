import styled from 'styled-components';

export const GithubImageBlack = styled.img`
	width: 55px;
	height: 55px;

	&:hover {
		opacity: 1;
	}
`;

export const GithubImageWhite = styled.img`
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

export const GithubImageContainer = styled.a`
	position: relative;
	/* width: 70px;
	height: 70px; */
	padding-left: 20px;
	align-items: center;
`;
