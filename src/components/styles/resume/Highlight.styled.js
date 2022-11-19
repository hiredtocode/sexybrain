import styled from 'styled-components';

export const Highlight = styled.span`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.font};
	font-weight: 500;
	display: inline;
	background-image: linear-gradient(
		${({ theme }) => theme.colors.body} 50%,
		${({ theme }) => theme.colors.underline}
	);
`;
