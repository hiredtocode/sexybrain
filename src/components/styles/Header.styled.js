import styled from 'styled-components';

export const StyledHeader = styled.header`
	/* background-color: ${({ theme }) => theme.colors.header}; */
	position: fixed;
	display: flex;
	width: 100vw;
	z-index: 100000;
	height: 70px;
	backdrop-filter: brightness(98%) blur(5px);
	transition: 0.6s;
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
