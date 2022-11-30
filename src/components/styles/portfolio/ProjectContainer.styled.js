import styled from 'styled-components/macro';

export const ProjectContainer = styled.section`
	display: flex;
	align-items: center;
	max-width: 1200px;
	justify-content: space-around;
	flex-wrap: wrap;

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

export const CardContainer = styled.div`
	position: relative;
`;

export const ProjectCard = styled.div`
	width: 100%;
	margin: 10px;
	border-radius: 10px;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.card};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

	.image {
		height: 300px;
		object-fit: cover;
	}
	h3 {
		width: 100%;
		padding: 15px;
	}
`;

export const ProjectDescription = styled.div`
	transition: 0.7s;
	padding: 15px;
`;

export const Stack = styled.div`
	transition: 0.7s;
	display: flex;
	flex-direction: column;
	min-width: 60px;
	margin-right: 5px;
	justify-content: center;
`;

export const FilterContainer = styled.div`
	flex-direction: column;
	min-width: 150px;
	margin: 10px;
	font-size: 1.1rem;
`;

export const StackButton = styled.button`
	cursor: pointer;
	border: none;
	margin: 3px;
	height: auto;
	background: ${({ theme }) => theme.colors.font};
	transition: 0.5s;

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
	}
`;
