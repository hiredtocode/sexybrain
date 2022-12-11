import styled from 'styled-components/macro';

export const PortFolioContainer = styled.main`
	display: flex;
	overflow: hidden;
	position: relative;

	.slides {
		display: flex;
		height: 100%;
		margin-top: 60px;
		margin-left: 50px;
		padding: 20px;
		background: ${({ theme }) => theme.colors.card};
	}
	.slides section {
		width: 33%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		transition: 0.2s linear;
	}
	.slides section .content {
		display: grid;
		max-width: 500px;
		text-transform: uppercase;
	}
	.slides section .content h2 {
		font-size: 2rem;
	}
	.slides section .content h3 {
		font-size: 1.5rem;
		color: orange;
	}
	.slides section .content button {
		outline: none;
		border: none;
		height: 4rem;
		width: 15rem;
		background: ${({ theme }) => theme.colors.strongAccent};
		text-decoration: none;
	}
	.slides section .image {
		height: 30rem;
		width: 38rem;
		margin: 0 16px;
		background-blend-mode: screen;
		filter: contrast(1.3);
	}
	.slides section:nth-child(1) .image {
		background: url(a.jpg), url(mask1.png) no-repeat;
		background-size: cover;
		background-position: center;
	}
	.slides section:nth-child(2) .image {
		background: url(b.jpg), url(mask2.png) no-repeat;
		background-size: cover;
		background-position: center;
	}
	.slides section:nth-child(3) .image {
		background: url(c.jpg), url(mask3.png) no-repeat;
		background-size: cover;
		background-position: center;
	}
	input {
		display: none;
	}
	body {
		position: relative;
	}
	.controls {
		position: absolute;
		top: 25px;
		left: 250px;
		min-width: 80%;
		display: flex;
		align-items: center;
	}
	.controls label {
		width: 32.55%;
		font-size: 1.8rem;
		text-align: center;

		border-top-right-radius: 10px;
		cursor: pointer;
	}
	.controls label:hover {
		background: ${({ theme }) => theme.colors.strongAccent};
		color: white;
	}

	#r1:checked ~ .slides > section:nth-child(1) {
		margin-left: 0%;
	}
	#r2:checked ~ .slides > section:nth-child(1) {
		margin-left: -33%;
	}
	#r3:checked ~ .slides > section:nth-child(1) {
		margin-left: -66%;
	}

	#r1:checked ~ .controls > label:nth-child(1),
	#r2:checked ~ .controls > label:nth-child(2),
	#r3:checked ~ .controls > label:nth-child(3) {
		background: ${({ theme }) => theme.colors.strongAccent};
		color: white;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		width: 100%;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex-direction: column;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;

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

export const Stack = styled.div`
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	min-width: 65px;
	margin-right: 5px;
	padding-top: 10px;
	justify-content: flex-start;

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
		justify-content: space-evenly;
		margin-bottom: 10px;
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
		writing-mode: inherit;
		text-orientation: inherit;
		align-items: center;
		flex-direction: column-reverse;
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
		align-items: flex-start;
	}

	ul li:hover {
		&:hover {
			color: ${({ theme }) => theme.colors.strongAccent};
			cursor: pointer;
		}
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex-direction: row;
		ul {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		min-width: 150px;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
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
	border: 1px solid ${({ theme }) => theme.colors.primary};

	color: ${({ theme }) => theme.colors.font};
	padding: 0 4px;

	&:hover {
		color: ${({ theme }) => theme.colors.strongAccent};
		cursor: pointer;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		font-size: 0.9rem;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`;
