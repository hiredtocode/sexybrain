import styled from 'styled-components/macro';

export const ProjectContainer = styled.section`
	display: flex;
	align-items: center;
	max-width: 1200px;
	justify-content: space-around;
	flex-wrap: wrap;
	flex-grow: 1;

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
	width: 100%;
	position: relative;
`;

export const ProjectCard = styled.div`
	width: 100%;
	margin: 10px;
	border-radius: 10px;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.card};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.primary};

	.image {
		height: 300px;
		object-fit: cover;
		opacity: 0.7;
		max-width: 400px;
		min-width: 400px;
	}

	h3 {
		width: 100%;
		padding: 15px;
		margin: 10px 0;
	}

	.subText {
		padding-left: 15px;
	}
	&:hover {
		box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.primary};
		transform: translateY(-3px);
		transition: 0.4s;
		.image {
			opacity: 1;
			transition: 0.5s;
		}
	}
`;

export const ProjectDescription = styled.div`
	transition: 0.5s;
	padding: 15px;
`;

export const Stack = styled.div`
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	min-width: 65px;
	margin-right: 5px;
	padding-top: 10px;
	justify-content: flex-start;
`;

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 200px;
	font-size: 1.1rem;
	ul {
		padding-left: 0;
		margin-top: 0;
	}
	ul li {
		list-style: none;
	}

	ul li:hover {
		&:hover {
			color: ${({ theme }) => theme.colors.strongAccent};
			cursor: pointer;
		}
	}
`;

export const StackButton = styled.div`
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 5px;
	overflow: hidden;
	height: auto;
	background: ${({ theme }) => theme.colors.card};
	transition: 0.5s;
	color: ${({ theme }) => theme.colors.subText};
	writing-mode: vertical-rl;
	text-orientation: mixed;

	span {
		color: ${({ theme }) => theme.colors.font};
		opacity: 0.5;
		cursor: default;
	}

	img {
		width: 30px;
		opacity: 0.5;
	}

	&:hover {
		img {
			transition: 0.4s;
			opacity: 1;
		}
		span {
			color: ${({ theme }) => theme.colors.strongAccent};
			transition: 0.4s;
			opacity: 1;
		}
		border: ${({ theme }) => theme.colors.strongAccentBackground};
	}
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

// Github button styling

export const GithubIconContainer = styled.a`
	position: relative;
	align-items: center;
	transition: 0.5s;
	margin: 0 10px;
`;

export const GithubTop = styled.img`
	border-radius: 50px;
	position: absolute;
	opacity: 0;
	top: -14px;
	min-width: 30px;
	min-height: 30px;
	object-fit: cover;
	transition: 0.5s;
	outline-width: 1px;
	outline-style: groove;
	outline-color: black;

	background: linear-gradient(
		135deg,
		${({ theme }) => theme.colors.hover},
		${({ theme }) => theme.colors.hovered}
	);

	&:hover {
		opacity: 1;
	}
`;

export const GithubBottom = styled.img`
	min-width: 30px;
	min-height: 30px;
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.colors.hover},
		${({ theme }) => theme.colors.hovered}
	);
	border-radius: 50px;
	object-fit: cover;
	transition: 0.5s;
	outline-width: 1px;
	outline-style: groove;
	outline-color: black;
`;

export const GithubLink = styled.img`
	border-radius: 50px;
	position: absolute;
	opacity: 0;
	min-width: 50px;
	min-height: 50px;
	object-fit: cover;
	transition: 0.5s;

	background: linear-gradient(
		135deg,
		${({ theme }) => theme.colors.hover},
		${({ theme }) => theme.colors.hovered}
	);

	&:hover {
		opacity: 1;
	}
`;

// Github button styling

export const CategoryFilter = styled.div`
	margin: 3px 3px;
	display: flex;
	padding: 5px 10px;
	align-items: center;
	max-height: 40px;
	justify-content: center;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	font-size: 1.1rem;
	border: 1px solid ${({ theme }) => theme.colors.primary};

	img {
		max-width: 35px;
		padding: 0 5px;
	}
	p {
		color: ${({ theme }) => theme.colors.font};

		padding: 0 4px;
	}
	&:hover {
		color: ${({ theme }) => theme.colors.strongAccent};
		cursor: pointer;
	}
`;
