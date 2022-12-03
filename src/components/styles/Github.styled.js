import styled from 'styled-components/macro';

export const GithubBottom = styled.img`
	min-width: 50px;
	min-height: 50px;
	background: linear-gradient(
		45deg,
		${({ theme }) => theme.colors.hover},
		${({ theme }) => theme.colors.hovered}
	);

	border-radius: 50px;
	object-fit: cover;
	transition: 0.5s;
`;

export const GithubTop = styled.img`
	border-radius: 50px;
	position: absolute;
	opacity: 0;
	min-width: 50px;
	min-height: 50px;
	object-fit: cover;
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
