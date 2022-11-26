import styled from 'styled-components/macro';

export const ProjectContainer = styled.section`
	display: flex;
	margin-top: 30px;
	flex: wrap;

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

export const ProjectCard = styled.div`
	width: 50%;
	height: 400px;
	padding: 15px;
	background: ${({ theme }) => theme.colors.card};
`;
