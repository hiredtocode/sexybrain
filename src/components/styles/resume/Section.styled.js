import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	padding-left: 20px;

	ul > li {
		margin-left: 30px;
		font-size: 1.2rem;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		ul > li {
			margin-left: -20px;
			font-size: 1.2rem;
		}
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
