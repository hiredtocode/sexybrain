import styled from 'styled-components/macro';

export const MainContainer = styled.div`
	display: flex;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		width: 100%;
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
