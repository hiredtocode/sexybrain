import styled from 'styled-components/macro';

export const RootContainer = styled.div`
	display: flex;
	max-width: 1200px;
	align-items: flex-start;
	padding: 130px 30px;
	margin: 0 auto;

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
