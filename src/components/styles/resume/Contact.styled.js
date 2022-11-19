import styled from 'styled-components';

export const Contact = styled.section`
	margin-left: 20px;

	p {
		padding-left: 20px;
	}
	.subText {
		color: ${({ theme }) => theme.colors.subText};
		padding-left: 15px;
		font-size: 1.2rem;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		p > span {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.subText {
			color: ${({ theme }) => theme.colors.subText};
			padding-left: 0;
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
