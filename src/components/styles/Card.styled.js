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
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	margin: 10px 0;
	padding: 15px;
	transition: 0.5s;

	&:hover {
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

export const Date = styled.div`
	display: flex;
	padding-right: 25px;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		margin-left: auto;
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
export const Description = styled.div`
	display: flex;
	padding-left: 220px;
	padding-bottom: 20px;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 30px;
		margine: 0 auto;
		z-index: 10;
		opacity: 1;
		color: white;
		transition: 0.8s;
		font-size: 0.9rem;
		padding-bottom: 10px;

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

// Delete & Edit button when logged in
export const IconContainer = styled.div`
	display: flex;
	position: absolute;
	bottom: 25px;
	right: 15px;
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
		opacity: 0.4;
		transform: rotate(-15deg);
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		opacity: 0.4;
		transition: 1s;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;
// Language logo on the left hand side of the card END

export const Box = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 200px;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		z-index: 5;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		flex-direction: column-reverse;
		align-items: flex-start;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		flex-direction: column-reverse;
		align-items: flex-start;
	} ;
`;
