import styled from 'styled-components/macro';

export const ProjectContainer = styled.section`
	display: flex;
	align-items: center;
	max-width: 1200px;
	padding: 40px 0;
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
	width: 550px;
	height: 400px;
	margin: 10px;
	border-radius: 15px;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.card};

	h3 {
		position: absolute;
		opacity: 0;
		left: 0;
		top: 0;
		width: 100%;
	}

	&:hover {
		h3 {
			opacity: 1;
			transition: 0.5s;
			color: ${({ theme }) => theme.colors.accent2};
			text-align: center;
			background: ${({ theme }) => theme.colors.card};
		}
	}
`;
