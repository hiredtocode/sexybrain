import styled from 'styled-components';

export const StyledHeader = styled.header`
	/* background-color: ${({ theme }) => theme.colors.header}; */
	position: fixed;
	display: flex;
	width: 100vw;
	padding: 0 50px;
	z-index: 100000;
	height: 70px;
	backdrop-filter: brightness(98%) blur(5px);
	transition: 0.6s;

	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 0 15px;
	}
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 0 15px;
	}
	@media (max-width: ${({ theme }) => theme.md}) {
		padding: 0 15px;
	}
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;

export const Nav = styled.nav`
	display: flex;
	width: 1200px;
	justify-content: space-between;
	align-items: center;
	transition: 0.6s;
	margin: 0 auto;
`;

export const Logo = styled.img`
	height: 60px;
`;
export const LinkContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
`;
