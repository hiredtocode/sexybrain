import styled from 'styled-components/macro';

export const PortFolioContainer = styled.main`
	display: flex;
	overflow: hidden;
	position: relative;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		width: 100%;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		flex-direction: column;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`;

export const ProjectContainer = styled.section`
	display: flex;
	align-items: center;
	max-width: 1200px;

	flex-direction: column;
	position: relative;
	width: calc(1200px - 200px);
	height: 500px;
	word-break: break-all;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		width: 100%;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		width: auto;
		height: auto;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`;

export const Tabs = styled.div`
	display: flex;
	min-width: 90%;
`;

export const Tab = styled.button`
	box-shadow: none;
	color: ${({ theme }) => theme.colors.font};
	background-color: ${({ theme }) => theme.colors.body};
	min-width: 30%;
	font-size: 1.5rem;
	border: none;
	padding: 15px;
	text-align: center;
	width: 100%;
	cursor: pointer;
	box-sizing: border-box;
	position: relative;

	&:hover {
		color: ${({ theme }) => theme.colors.heading};
		transition: 0.3s;
	}
	&.active {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const ContentContainer = styled.div`
	flex-grow: 1;
	width: 100%;
`;
export const Content = styled.div`
	padding: 20px;
	min-width: 100%;
	display: none;

	hr {
		width: 100px;
		height: 2px;
		background: ${({ theme }) => theme.colors.lineBreak};
		margin-bottom: 5px;
	}

	&.isActive {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-column-gap: 15px;
	}

	.featured {
		margin: 10px 0px;
		color: ${({ theme }) => theme.colors.primary};
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 0px;

		.featured {
			margin: 10px 0px;
			color: ${({ theme }) => theme.colors.primary};
			z-index: 2;
		}
	}
`;

export const CardContainer = styled.div`
	width: 100%;
	position: relative;
`;

export const Description = styled.div`
	background: ${({ theme }) => theme.colors.card};
	padding: 1.5rem;
	margin: 20px 0;
	word-break: keep-all;
	border-radius: 5px;
	box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
	z-index: 2;
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		padding: 1rem;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`;

export const ProjectContent = styled.div`
	grid-column: 6 / -1;
	max-height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	grid-row: 1;
	position: relative;
	text-align: right;

	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		grid-column: 4 / -1;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		grid-column: 2 / -1;

		.featured {
			font-size: 1rem;
		}
		h2 {
			font-size: 1.5rem;
			z-index: 2;
		}
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	p {
		font-size: 1.1rem;
	}

	h2 {
		margin-top: -10px;
		z-index: 2;
	}

	h2 a {
		width: auto;
		color: ${({ theme }) => theme.colors.heading};
	}
	h2 a:hover {
		color: ${({ theme }) => theme.colors.primary};
		transition: 0.3s;
	}
`;

export const ProjectImage = styled.picture`
	grid-column: 1 / 7;
	grid-row: 1;
	height: 400px;
	z-index: 1;
	position: relative;
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		grid-column: 1 / 9;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		grid-column: 1 / 10;
		opacity: 0.7;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		grid-column: 1 / 11;
		opacity: 0.5;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		grid-column: 1 / -1;
	}

	a img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		object-fit: cover;
		object-position: top;
	}

	a::before {
		content: '';
		position: absolute;
		width: 99%;
		border-radius: 11px;
		height: 99%;
		inset: 0px;
		border: none;
		background-color: ${({ theme }) => theme.colors.primary};
		mix-blend-mode: screen;
	}

	a:hover::before,
	.image:hover {
		mix-blend-mode: none;
		filter: none;
		background-color: transparent;
		transition: 0.5s;
	}
	.image {
		mix-blend-mode: multiply;
		filter: grayscale(100%) contrast(1) brightness(90%);
		border: none;
	}
`;

export const ProjectCard = styled.div`
	display: flex;
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

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		.image {
			display: none;
		}
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex-direction: column;
		.image {
			height: 300px;
			object-fit: cover;
			opacity: 0.7;
			max-width: 100%;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		.image {
			height: 300px;
			object-fit: cover;
			opacity: 0.7;
			max-width: 100%;
			min-width: 400px;
		}
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		flex-direction: column;
		.image {
			height: 300px;
			object-fit: cover;
			opacity: 0.7;
			min-width: 100%;
		}
	}
`;

export const ProjectDescription = styled.div`
	transition: 0.5s;
	padding: 15px;
`;

export const ProjectLink = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 20px;
	@media (max-width: ${({ theme }) => theme.xs}) {
		z-index: 2; /* xs: '575.98px' */
		.image {
			display: none;
		}
	}
`;

export const ProjectStack = styled.div`
	transition: 0.5s;
	display: flex;
	flex-direction: row;
	min-width: 65px;
	margin-right: 5px;
	justify-content: flex-end;

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
		flex-direction: row;
		margin-bottom: 10px;
	}
`;

export const StackButton = styled.div`
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 5px 10px;
	overflow: hidden;
	align-items: center;
	height: auto;
	transition: 0.5s;
	color: ${({ theme }) => theme.colors.subText};
	z-index: 2;

	span {
		color: ${({ theme }) => theme.colors.font};
		cursor: default;
	}

	img {
		width: 30px;
		opacity: 0.6;
	}

	&:hover {
		img {
			transition: 0.4s;
			opacity: 1;
		}
		span {
			color: ${({ theme }) => theme.colors.primary};
			transition: 0.4s;
			opacity: 1;
		}
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		span {
			display: none;
		}
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		align-items: center;
		word-break: keep-all;
		span {
			font-size: 0.9rem;
		}
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

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 200px;
	font-size: 1.1rem;

	ul {
		padding-left: 0;
		margin-top: 0;
	}
	div {
		padding: 10px 0;
	}

	ul li {
		display: none;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary};
		}
		70% {
			box-shadow: 0 0 0 10px rgba(100, 255, 218, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
		}
	}

	ul li:hover {
		&:hover {
			color: ${({ theme }) => theme.colors.heading};
			border: 1px solid ${({ theme }) => theme.colors.primary};

			cursor: pointer;
		}
	}
	ul div {
		color: ${({ theme }) => theme.colors.font};
	}
	ul li.pressed {
		margin-left: 15px;
		display: flex;
		color: ${({ theme }) => theme.colors.font};
		height: 100px;
		padding: 15px 50px;
		align-items: center;
		height: 30px;
		max-height: 40px;
		justify-content: center;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
		font-size: 1.1rem;
		background-color: ${({ theme }) => theme.colors.card};
		animation: pulse 1.5s infinite;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		flex-direction: row;
		ul {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}
		ul li.pressed {
			display: flex;
			color: ${({ theme }) => theme.colors.font};
			height: 20px;
		}
		ul li {
			padding: 15px 15px;
		}
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		min-width: 180px;
	}
`;

export const CategoryFilter = styled.div`
	margin: 3px 3px;
	display: flex;
	padding: 5px 10px;
	align-items: center;
	height: 30px;
	max-height: 40px;
	justify-content: center;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	font-size: 1.1rem;
	background-color: ${({ theme }) => theme.colors.card};
	color: ${({ theme }) => theme.colors.font};
	padding: 0 4px;

	&:hover {
		color: ${({ theme }) => theme.colors.heading};
		box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.primary};
		cursor: pointer;
	}

	&.pressed {
		display: none;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		span {
			padding: 0 10px;
		}
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		span {
			font-size: 1rem;
		}
	}
`;
