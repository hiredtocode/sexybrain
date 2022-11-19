import styled from 'styled-components';

export const GithubBottom = styled.img`
	width: 42px;
	height: 42px;
	background: ${({ theme }) => theme.colors.button};
	border-radius: 50px;
	transition: 0.5s;
`;

export const GithubTop = styled.img`
	border-radius: 50px;
	position: absolute;
	opacity: 0;
	width: 42px;
	height: 42px;
	transition: 0.5s;

	background: linear-gradient(
		45deg,
		${({ theme }) => theme.colors.hover},
		${({ theme }) => theme.colors.hovered}
	);

	&:hover {
		opacity: 1;
	}
`;

export const GithubIconContainer = styled.a`
	position: relative;
	align-items: center;
	transition: 0.5s;
`;
