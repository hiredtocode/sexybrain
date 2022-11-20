import styled from 'styled-components/macro';

export const Categories = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 50px;
	margin-top: 8px;

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
		flex-direction: column;
	} ;
`;
