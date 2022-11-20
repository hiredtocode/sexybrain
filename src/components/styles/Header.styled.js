import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
	/* background-color: ${({ theme }) => theme.colors.header}; */
	position: fixed;
	display: flex;
	margin: 0 auto;
	width: 100vw;
	padding: 0 50px;
	z-index: 10000;
	height: 70px;
	background-color: ${({ theme }) => theme.colors.header};
	backdrop-filter: brightness(98%) blur(5px);

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 0 15px;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;

export const Nav = styled.nav`
	display: flex;
	width: 1200px;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

export const Logo = styled.img`
	max-height: 60px;
	max-width: 60px;
	object-fit: cover;
`;
export const LinkContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
`;
