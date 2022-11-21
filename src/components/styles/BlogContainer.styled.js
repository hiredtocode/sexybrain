import styled from 'styled-components/macro';

export const BlogContainer = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1 1 70%;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		flex: 1 1 100%;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex: 1 1 90%;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;
