import styled from 'styled-components/macro';

export const H1 = styled.h1`
	font-size: 2.1rem;
	z-index: 2000;
	color: ${({ theme }) => theme.colors.font};
`;
export const H2 = styled.h2`
	font-size: 1.8rem;
	transition: 0.7s;
	z-index: 2000;
	color: ${({ theme }) => theme.colors.font};

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		z-index: 10;
		opacity: 1;
		color: white;
		font-size: 1.4rem;
		transition: 0.7s;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`;
export const H3 = styled.h3`
	font-size: 1.3rem;
	z-index: 2000;

	color: ${({ theme }) => theme.colors.font};
`;
