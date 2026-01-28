import styled from 'styled-components/macro'
import { H2 } from './General.styled'

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
`

export const ProjectContainer = styled.section`
	display: flex;
	align-items: center;
	max-width: 1200px;

	flex-direction: column;
	position: relative;
	width: calc(1200px - 200px);
	/* height: 500px; */
	word-break: normal;
	overflow-wrap: break-word;

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
`

export const Tabs = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 30px;
	border-bottom: 2px solid ${({ theme }) => theme.colors.lineBreak};
	gap: 0;
`

export const Tab = styled.button`
	box-shadow: none;
	color: ${({ theme }) => theme.colors.font};
	background-color: transparent;
	font-size: 1.2rem;
	font-weight: 600;
	border: none;
	border-bottom: 3px solid transparent;
	padding: 15px 30px;
	text-align: center;
	cursor: pointer;
	box-sizing: border-box;
	position: relative;
	transition: all 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.button};
		transition: all 0.3s ease;
	}
	&.active {
		color: ${({ theme }) => theme.colors.primary};
		border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.button};
	}
`

export const TabContent = styled.div`
	width: 100%;
	padding: 20px 0;
`

export const ProjectButton = styled.button`
	width: 100%;
	padding: 20px 25px;
	margin-bottom: 15px;
	background-color: ${({ theme }) => theme.colors.button};
	border: 1px solid ${({ theme }) => theme.colors.lineBreak};
	border-radius: 8px;
	cursor: pointer;
	text-align: left;
	transition: all 0.3s ease;
	color: ${({ theme }) => theme.colors.font};
	font-size: 1.1rem;
	font-weight: 600;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hover};
		border-color: ${({ theme }) => theme.colors.primary};
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	&.active {
		background-color: ${({ theme }) => theme.colors.hover};
		color: ${({ theme }) => theme.colors.primary};
	}
`

export const ProjectDetails = styled.div`
	width: 100%;
	padding: ${({ isOpen }) => (isOpen ? '25px' : '0 25px')};
	margin-bottom: ${({ isOpen }) => (isOpen ? '15px' : '0')};
	background-color: ${({ theme }) => theme.colors.card};
	border: ${({ isOpen, theme }) => (isOpen ? `1px solid ${theme.colors.lineBreak}` : '1px solid transparent')};
	border-radius: 8px;
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	max-height: ${({ isOpen }) => (isOpen ? '5000px' : '0')};
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
	pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
	word-break: normal;
	overflow-wrap: break-word;
`

export const ContentContainer = styled.div`
	flex-grow: 1;
	width: 100%;
	
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 0 10px;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 0 15px;
	}
`
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

	.featured mark {
		margin: 10px 0px;
		color: ${({ theme }) => theme.colors.primary};
	}
	.featured mark {
		background-color: ${({ theme }) => theme.colors.body};
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 0px;

		.featured {
			margin: 10px 0px;
			color: ${({ theme }) => theme.colors.primary};
			z-index: 2;
		}
		.featured mark {
			background-color: ${({ theme }) => theme.colors.body};
		}
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		.featured mark {
			background-color: ${({ theme }) => theme.colors.body};
		}
	}
`

export const CardContainer = styled.div`
	width: 100%;
	position: relative;
`

export const Description = styled.div`
	background: ${({ theme }) => theme.colors.card};
	padding: 1.5rem;
	margin: 20px 0;
	word-break: keep-all;
	border-radius: 5px;
	box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
	z-index: 2;
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		padding: 1rem;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}

	p {
		line-height: 1.4;
	}
`

export const ProjectContent = styled.div`
	grid-column: 6 / -1;
	/* max-height: 400px; */
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	grid-row: 1;
	position: relative;
	text-align: right;

	mark {
		background-color: ${({ theme }) => theme.colors.body};
	}

	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		/* grid-column: 4 / -1; */
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		grid-column: 1 / -1;
		padding-right: 10px;

		.featured {
			font-size: 1rem;
		}
		h2 {
			font-size: 1.7rem;
			z-index: 2;
		}
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		grid-column: 1/-1;
	}
	p {
		font-size: 1rem;
		text-align: center;
	}

	h2 {
		text-align: center;
		margin-top: -10px;
		word-break: keep-all;
		font-size: 1.5rem;
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
`

export const ProjectImage = styled.picture`
	grid-column: 1 / 7;
	grid-row: 1;
	height: 400px;
	z-index: 1;
	position: relative;
	align-self: center;
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		grid-column: 1 / 7;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		grid-column: 1 / 7;
		opacity: 0.7;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		display: none;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		/* grid-column: 1 / -1; */
		display: none;
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
`

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
`

export const ProjectDescription = styled.div`
	transition: 0.5s;
	padding: 15px;
`

export const ProjectLink = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 0;
	gap: 0.5rem;

	@media (max-width: ${({ theme }) => theme.xs}) {
		z-index: 2; /* xs: '575.98px' */
		.image {
			display: none;
		}
	}
`

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
`

export const StackButton = styled.div`
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;
	margin: 0 5px;
	align-items: center;
	height: auto;
	transition: 0.5s;
	color: ${({ theme }) => theme.colors.subText};
	z-index: 2;
	background-color: ${({ theme }) => theme.colors.body};
	border-radius: 5px;
	padding: 5px;

	span {
		color: ${({ theme }) => theme.colors.font};
		cursor: default;
	}

	img {
		width: 30px;
		max-height: 28px;
		height: auto;
		object-fit: contain;
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
`

// Github button styling

export const GithubIconContainer = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: 0.5s;
	margin: 0 10px;
	line-height: 0;
	.icon {
		opacity: 0.6;
	}
	.icon:hover {
		opacity: 1;
	}
	svg {
		width: 2.5rem;
		vertical-align: middle;
	}
`

export const GithubPrivateTooltip = styled.span`
	position: absolute;
	bottom: calc(100% + 8px);
	left: 50%;
	transform: translateX(-50%);
	white-space: nowrap;
	padding: 10px 14px;
	border-radius: 6px;
	font-size: 0.95rem;
	line-height: 1.2;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.colors.card};
	color: ${({ theme }) => theme.colors.font};
	border: 1px solid ${({ theme }) => theme.colors.lineBreak};
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.05s ease 0s;
	z-index: 10;
`

export const GithubIconDisabled = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: 0.2s;
	margin: 0 10px;
	line-height: 0;
	cursor: not-allowed;
	pointer-events: auto;
	.icon {
		opacity: 0.45;
		filter: grayscale(1);
		transition: filter 0.2s, opacity 0.2s;
	}
	svg {
		width: 2.5rem;
		vertical-align: middle;
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		height: 2px;
		background: ${({ theme }) => theme.colors.subText};
		opacity: 0.9;
		transform: translateY(-50%);
		transition: opacity 0.2s, background 0.2s;
		pointer-events: none;
	}
	&:hover {
		${GithubPrivateTooltip} {
			opacity: 1;
		}
		.icon {
			opacity: 0.5;
		}
	}
`

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
`

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
`

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
`

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

	ul div {
		color: ${({ theme }) => theme.colors.font};
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
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		min-width: 180px;
	}
`

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
`

export const LinkButtonDiv = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	line-height: 0;
	.icon {
		opacity: 0.6;
	}
	.icon:hover {
		opacity: 1;
	}
`

export const CategorySection = styled.div`
	margin-bottom: 60px;

	&:last-child {
		margin-bottom: 0;
	}
`

export const CategoryTitle = styled(H2)`
	margin-bottom: 30px;
`

export const EmptyCategory = styled.div`
	padding: 40px 20px;
	text-align: center;
	color: ${({ theme }) => theme.colors.subText};
	font-style: italic;
`
