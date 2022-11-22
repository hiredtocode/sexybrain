import styled from 'styled-components/macro';

export const MarkdownContainer = styled.div`
	width: 70%;
	padding: 20px;
	background: ${({ theme }) => theme.colors.card};
	border-radius: 1rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	margin-left: 1em;
	height: 80vh;
`;
