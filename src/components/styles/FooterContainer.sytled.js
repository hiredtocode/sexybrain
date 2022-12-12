import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: auto;
	min-height: 150px;
	padding: 15px;
	text-align: center;

	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: ${({ theme }) => theme.colors.font};
	}
	a:hover {
		color: ${({ theme }) => theme.colors.primary};
		position: relative;
		transition: 0.3s;
	}
`;
