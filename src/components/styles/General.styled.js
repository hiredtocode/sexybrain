import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const H1 = styled.h1`
	font-size: 2.1rem;
	color: ${({ theme }) => theme.colors.heading};
`
export const H2 = styled.h2`
	font-size: 1.8rem;
	font-weight: 700;
	transition: 0.7s;

	color: ${({ theme }) => theme.colors.heading};

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		z-index: 10;
		opacity: 1;
		font-size: 1.6rem;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`
export const H3 = styled.h3`
	font-size: 1.3rem;
	font-weight: 700;

	color: ${({ theme }) => theme.colors.heading};

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		font-size: 1.1rem;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`

export const LineBreak = styled.div`
	width: 100%;
	height: 1px;
	visibility: visible;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lineBreak};
`
export const LinkStyled = styled(Link)`
	color: ${({ theme }) => theme.colors.font};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.colors.accent};
	}
`

export const Flex = styled.div`
	display: flex;
	flex-grow: ${({ grow }) => grow};
	flex-direction: ${({ direction }) => direction};
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
	gap: ${({ gap }) => gap};
	margin-top: ${({ margin }) => margin};
	margin-right: ${({ margin }) => margin};
	margin-bottom: ${({ margin }) => margin};
	margin-left: ${({ margin }) => margin};
	flex-wrap: ${({ wrap }) => wrap};
	text-align: ${({ text }) => text};

	h3 {
		font-weight: bold;
	}

	/*	xs: '575.98px'*/
	@media (max-width: ${({ theme }) => theme.xs}) {
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
`

export const Button = styled.button`
	border-radius: 50px;
	border: none;
	transition: 0.5s;
	word-break: keep-all;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0 5px;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.colors.button};
	color: ${({ theme }) => theme.colors.font};

	.icon {
		background: none;
		outline: none;
		border: none;
		cursor: pointer;
	}
	&:hover {
		transition: 0.8s;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}
`
export const DivContainer = styled.div`
	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary};
		}
		70% {
			box-shadow: 0 0 0 10px rgba(100, 255, 218, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
		}
	}

	ul li:hover {
		&:hover {
			color: ${({ theme }) => theme.colors.heading};
			border: 1px solid ${({ theme }) => theme.colors.primary};

			cursor: pointer;
		}
	}

	ul li.pressed {
		margin-left: 15px;
		display: flex;
		color: ${({ theme }) => theme.colors.font};
		height: 100px;
		padding: 15px 50px;
		align-items: center;
		height: 30px;
		max-height: 40px;
		justify-content: center;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
		font-size: 1.1rem;
		background-color: ${({ theme }) => theme.colors.card};
		animation: pulse 1.5s infinite;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		flex-direction: row;

		display: flex;
		flex-wrap: wrap;
		align-items: center;

		ul li.pressed {
			display: flex;
			color: ${({ theme }) => theme.colors.font};
			height: 20px;
		}
		ul li {
			padding: 15px 15px;
		}
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		min-width: 180px;
	}
`

export const AppLayout = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

export const RootContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	max-width: 1200px;
	width: 100%;
	align-items: flex-start;
	padding: 130px 50px;
	margin: 0 auto;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 100px 10px;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 110px 15px;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		padding: 120px 25px;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`
export const Highlight = styled.span`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.heading};
	font-weight: 500;
	display: inline;
	background-image: linear-gradient(
		${({ theme }) => theme.colors.body} 50%,
		${({ theme }) => theme.colors.underline}
	);
`
