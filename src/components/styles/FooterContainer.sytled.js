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
	color: ${({ theme }) => theme.colors.heading};

	a span {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: ${({ theme }) => theme.colors.font};
	}
	a span:hover {
		color: ${({ theme }) => theme.colors.primary};
		position: relative;
		transition: 0.3s;
	}
`;
