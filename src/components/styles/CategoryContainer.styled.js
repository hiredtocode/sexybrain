import styled from 'styled-components/macro';

export const Aside = styled.aside`
	display: flex;
	padding-left: 20px;
	flex: 1 1 30%;
	flex-direction: column;
	position: sticky;
	position: -webkit-sticky;
	top: 45px;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		display: none;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex: 1 1 10%;
		span {
			display: none;
		}
		img {
			margin: 0 auto;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;
