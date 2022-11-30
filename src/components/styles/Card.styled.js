import styled from 'styled-components/macro';

export const CardContainer = styled.div`
	position: relative;
	min-width: 100%;

	&:hover {
		h2 {
			background: linear-gradient(
				90deg,
				${({ theme }) => theme.colors.titleBackgroundColor1} 8%,
				${({ theme }) => theme.colors.titleBackgroundColor2} 20%,
				${({ theme }) => theme.colors.titleBackgroundColor3} 100%
			);
		}
	}
`;

export const StyledCard = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.card};
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	margin: 10px 0;
	padding: 20px;
	transition: 0.5s;

	&:hover > &::after {
		opacity: 1;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 10px;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 15px;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}

	&:hover {
		border: 1px outset ${({ theme }) => theme.colors.primary};
		transform: translateY(-5px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		transition: 0.4s;

		img {
			transition: 0.4s ease-in-out;
			opacity: 0.6;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 100%;
	font-size: 1.15rem;
	color: ${({ theme }) => theme.colors.font};
`;

// Delete & Edit button when logged in
export const IconContainer = styled.div`
	display: flex;
	position: absolute;
	top: 20px;
	left: 20px;
	z-index: 5;
`;
// Delete & Edit button when logged in END

// Language logo on the left hand side of the card
export const CategoryMark = styled.div`
	position: relative;

	img {
		min-width: 250px;
		position: absolute;
		min-height: 250px;
		top: -150px;
		left: -30px;
		opacity: 0.3;
		transform: rotate(-15deg);
	}

	/* xs: '575.98px' */
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
		opacity: 0.4;
		transition: 0.7s;
	} ;
`;
// Language logo on the left hand side of the card END

export const Date = styled.div`
	display: flex;
	flex: 1 1 30%;
	justify-content: flex-end;
	transition: 0.7s;
	text-align: right;
	span {
		color: ${({ theme }) => theme.colors.primary};
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		margin-left: auto;
		transition: 0.7s;
		font-size: 0.9rem;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		margin-left: auto;
		padding-right: 0;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		margin-left: auto;
	} ;
`;

export const Box = styled.div`
	display: flex;
	justify-content: space-between;
	transition: 0.7s;

	h2 {
		width: 100%;
		text-align: center;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		z-index: 5;
		transition: 0.7s;
		h2 {
			width: 100%;
			text-align: left;
			transition: 0.7s;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		align-items: flex-start;
		transition: 0.7s;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		align-items: flex-start;
	} ;
`;

export const Description = styled.div`
	display: flex;
	z-index: 10;
	transition: 0.7s;

	span {
		width: 100%;
		text-align: center;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		margine: 0 auto;
		z-index: 10;
		opacity: 1;
		color: white;
		transition: 0.7s;

		font-size: 0.9rem;

		div {
			padding-left: 0;
			margin: 0 auto;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		padding-right: 0;
		transition: 0.7s;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;
