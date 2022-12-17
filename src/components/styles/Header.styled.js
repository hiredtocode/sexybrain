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
	}

	a span {
		display: inline-block;
		padding: 10px;
		margin: 0 5px;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.colors.font};
	}
	a span:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.colors.primary};
	}

	.active span {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Nav = styled.nav`
	display: flex;
	width: 1200px;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

export const Logo = styled.img`
	height: 60px;
	width: 60px;
	object-fit: cover;
`;

export const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.s}) {
		display: none;
	}
`;

export const HamburgerMenu = styled.button`
	display: block;
	position: relative;
	z-index: 1;
	margin-left: 15px;

	user-select: none;

	appearance: none;
	border: none;
	outline: none;
	background: none;
	cursor: pointer;

	span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background-color: lightgrey;
		border-radius: 6px;
		z-index: 1;

		transform-origin: 0 0;
		transition: 0.4s;
	}

	&:hover span:nth-child(2) {
		transform: translateX(10px);
		background-color: ${({ theme }) => theme.colors.primary};
	}

	&.isActive span:nth-child(1) {
		transform: translate(0px, -2px) rotate(45deg);
	}
	&.isActive span:nth-child(3) {
		transform: translate(-3px, 3px) rotate(-45deg);
	}
	&.isActive span:nth-child(2) {
		opacity: 0;
		transform: translate(15px);
	}

	&.isActive:hover span {
		background-color: ${({ theme }) => theme.colors.primary};
	}

	@media (min-width: ${({ theme }) => theme.s}) {
		display: none;
	}
`;

export const MobileNav = styled.div`
	position: fixed;
	top: 0;
	right: -100%;
	margin-top: 70px;
	width: 250px;
	min-height: 100vh;
	display: block;
	background-color: ${({ theme }) => theme.colors.primaryBackground};
	font-size: 1.2rem;
	font-weight: 700;
	transition: 0.3s;

	a {
		display: block;
		min-width: 50%;
		margin: 15px auto;
		text-align: center;
		padding: 12px 16px;
		background-color: ${({ theme }) => theme.colors.button};
		color: ${({ theme }) => theme.colors.font};
		text-decoration: none;

		&:hover {
			transition: 0.8s;
			box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
			background: linear-gradient(
				135deg,
				${({ theme }) => theme.colors.hover},
				${({ theme }) => theme.colors.hovered}
			);
			color: white;
		}
	}

	&.isActive {
		right: 0;
	}
	// Hide mobile menu if window size is greater than theme.s
	@media (min-width: ${({ theme }) => theme.s}) {
		display: none;
	}
`;

export const ShowOnWebContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.s}) {
		display: none;
	}
`;

export const ShowOnMobileContainer = styled.div`
	display: flex;
	align-items: center;

	@media (min-width: ${({ theme }) => theme.s}) {
		display: none;
	}
`;

export const DarkLightContainer = styled.div`
	border: none;
	cursor: pointer;
	height: 50px;
	width: 50px;
	margin: 0 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		margin-right: 5px;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		padding: 1rem;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}

	svg {
		fill: ${({ theme }) => theme.colors.primary};
	}

	&:hover svg {
		fill: ${({ theme }) => theme.colors.strongAccent};
	}
`;

export const DivContainer = styled.div``;
