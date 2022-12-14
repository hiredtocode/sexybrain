import styled from 'styled-components/macro';

export const CardContainer = styled.div`
	position: relative;
	min-width: 100%;
`;

export const StyledCard = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.card};
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	margin: 10px 0;
	padding: 10px;

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

	&:hover > &::after {
		opacity: 1;
	}

	&:hover {
		box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.primary};

		img {
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
	bottom: 20px;
	left: 20px;
	z-index: 5;

	#edit {
		opacity: 0.7;
		color: ${({ theme }) => theme.colors.primary};
	}
	#trash {
		opacity: 0.7;
		color: ${({ theme }) => theme.colors.cancelHovered};
	}
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
	} ;
`;
// Language logo on the left hand side of the card END

export const Date = styled.div`
	display: flex;
	flex: 1 1;
	min-width: 210px;
	flex-direction: column;
	justify-content: flex-start;
	transition: 0.7s;
	text-align: right;

	mark {
		opacity: 1;
		color: ${({ theme }) => theme.colors.font};
		background-color: ${({ theme }) => theme.colors.card};
		font-size: 0.9rem;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		margin-left: auto;
		font-size: 0.7rem;
		flex-direction: column;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		margin-left: auto;
		padding-right: 0;
		width: 100%;
		font-size: 0.8rem;
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
	z-index: 1;
	h2 {
		width: 100%;
		text-align: center;
	}
	mark {
		background-color: ${({ theme }) => theme.colors.card};
		color: ${({ theme }) => theme.colors.heading};
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		z-index: 5;
		h2 {
			width: 100%;
			transition: 0.7s;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		align-items: flex-start;
		flex-direction: column-reverse;
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
	margin-bottom: 25px;

	mark {
		background-color: ${({ theme }) => theme.colors.card};
		color: ${({ theme }) => theme.colors.font};
		margin: 0 auto;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		margin: 0 auto;
		z-index: 10;
		opacity: 1;
		margin-bottom: 15px;
		font-size: 0.9rem;

		div {
			padding-left: 0;
			margin: 0 auto;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		padding-right: 0;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;
