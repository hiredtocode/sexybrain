import styled from 'styled-components/macro'

/** Wraps a single blog post detail view so it always uses full width of the container. */
export const BlogDetailPageLayout = styled.div`
	width: 100%;
	min-width: 0;
	flex-grow: 1;
`

/** Wraps BlogContainer + Aside so they sit side-by-side (blog left, categories/tags right). */
export const BlogPageLayout = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: flex-start;
	gap: 0;

	@media (max-width: ${({ theme }) => theme.md}) {
		flex-direction: column;
	}
`

export const BlogContainer = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1 1 70%;

	p span {
		margin-left: 20px;
		border-radius: 5px;
		color: ${({ theme }) => theme.colors.primary};
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		flex: 1 1 100%;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex: 1 1 90%;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}

	.selected {
		display: flex;
		align-items: center;
	}
	img {
		height: 20px;
	}
	.cancel {
		margin-left: 10px;
		background-color: transparent;
		border: none;
		padding-top: 3px;
		border-radius: 3px;

		animation: pulse 1s infinite;

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
	}
	span,
	button:hover {
		cursor: pointer;
	}
`

export const BlogTitleBox = styled.div`
	z-index: 555;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;

	h2 {
		color: ${({ theme }) => theme.colors.heading};
		font-weight: 300;
		font-size: 3.5rem;
	}

	.single & {
		position: relative;
		height: 350px;
		width: 100%;
	}
	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.4);
	}
	.blog-title {
		z-index: 12;
		position: absolute;
		bottom: 0;
		padding: 30px;

		.single & {
			width: 100%;
			margin: 0 auto;
			text-align: center;
		}

		> span {
			display: block;
			color: rgba(255, 255, 255, 0.5);
			text-transform: uppercase;
			font-size: 15px;
			letter-spacing: 0.05em;
			margin-bottom: 10px;
		}
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		h2 {
			color: white;
			font-weight: 300;
			font-size: 2rem;
		}
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		h2 {
			color: white;
			font-weight: 300;
			font-size: 2.5rem;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`

export const BlogDetail = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 0;

	.blog-single-content {
		z-index: 999;
		background: white;

		p,
		ul li {
			font-size: 1.05rem;
		}
	}
	.authorInfo {
		display: flex;
		flex-direction: row;
		margin: 15px 0;
		border-bottom: 1px solid #777;
		font-size: 1.2rem;
		color: #222;
		text-decoration: none;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		padding-bottom: 15px;
		color: ${({ theme }) => theme.colors.font};
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		.authorInfo {
			font-size: 1rem;
			flex-direction: column;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`
export const Author = styled.p`
	display: inline-block;
	font-weight: 500;
`

export const MarkdownContainer = styled.div`
	h2 {
		font-size: 1.7rem;
	}
	h3 {
		font-size: 1.4rem;
	}
	// Line breaks
	hr {
		border: none;
		border-top: 3px double ${({ theme }) => theme.colors.lineBreak};
		color: ${({ theme }) => theme.colors.primary};
		overflow: visible;
		text-align: center;
		height: 5px;
		width: 100%;
	}

	hr::after {
		background: ${({ theme }) => theme.colors.body};
		content: '§';
		padding: 0 4px;
		position: relative;
		top: -13px;
		transition: 1s;
	}
	// Line breaks END
	// Codeblock
	code {
		padding: 2px 4px;
		color: ${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.card};
		border-radius: 4px;
	}
	// Codeblock END

	p img {
		max-width: 35%;
	}

	blockquote {
		border-left: 5px solid ${({ theme }) => theme.colors.lineBreak};
		margin: 0 0 20px;
		padding: 10px 20px;
		font-weight: 600;
	}

	pre {
		padding: 9.5px;
		border-radius: 4px;
		line-height: 1.42857143;
		color: ${({ theme }) => theme.colors.secondary};
		border: 1px solid ${({ theme }) => theme.colors.lineBreak};
		background-color: ${({ theme }) => theme.colors.body};
		word-wrap: break-word;
	}

	thead {
		background-color: ${({ theme }) => theme.colors.card};
	}
	th {
		border-bottom: 2px solid ${({ theme }) => theme.colors.subText};
	}

	tr td {
		border-top: 1px solid ${({ theme }) => theme.colors.subText};
		padding: 8px;
	}
`

export const CardContainer = styled.div`
	position: relative;
	min-width: 100%;
`

export const StyledCard = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.card};
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	margin: 10px 0;
	padding: 10px;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 10px;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 15px;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}

	&:hover > &::after {
		opacity: 1;
	}

	&:hover {
		box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.primary};

		img {
			opacity: 0.6;
		}
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 100%;
	font-size: 1.15rem;
	color: ${({ theme }) => theme.colors.font};
`

// Delete & Edit button when logged in
export const IconContainer = styled.div`
	display: flex;
	position: absolute;
	bottom: 20px;
	left: 20px;
	z-index: 5;

	#edit {
		opacity: 0.7;
		color: ${({ theme }) => theme.colors.primary};
	}
	#trash {
		opacity: 0.7;
		color: ${({ theme }) => theme.colors.cancelHovered};
	}
`
// Delete & Edit button when logged in END

// Language logo on the left hand side of the card
export const CategoryMark = styled.div`
	position: relative;

	img {
		min-width: 250px;
		position: absolute;
		min-height: 250px;
		top: -150px;
		left: -30px;
		opacity: 0.3;
		transform: rotate(-15deg);
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
`
// Language logo on the left hand side of the card END

export const Date = styled.div`
	display: flex;
	flex: 1 1;
	min-width: 210px;
	flex-direction: column;
	justify-content: flex-start;
	transition: 0.7s;
	text-align: right;

	mark {
		opacity: 1;
		color: ${({ theme }) => theme.colors.font};
		background-color: ${({ theme }) => theme.colors.card};
		font-size: 0.9rem;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		margin-left: auto;
		font-size: 0.7rem;
		flex-direction: column;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		margin-left: auto;
		padding-right: 0;
		font-size: 0.8rem;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		margin-left: auto;
	}
`

export const Box = styled.div`
	display: flex;
	justify-content: space-between;
	transition: 0.7s;
	z-index: 1;
	h2 {
		width: 100%;
		text-align: center;
	}
	mark {
		background-color: ${({ theme }) => theme.colors.card};
		color: ${({ theme }) => theme.colors.heading};
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		z-index: 5;
		h2 {
			width: 100%;
			transition: 0.7s;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		align-items: flex-start;
		flex-direction: column-reverse;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		align-items: flex-start;
	}
`

export const Description = styled.div`
	display: flex;
	z-index: 10;
	transition: 0.7s;
	margin-bottom: 25px;

	mark {
		background-color: ${({ theme }) => theme.colors.card};
		color: ${({ theme }) => theme.colors.font};
		margin: 0 auto;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		margin: 0 auto;
		z-index: 10;
		opacity: 1;
		margin-bottom: 15px;
		font-size: 0.9rem;

		div {
			padding-left: 0;
			margin: 0 auto;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		padding-right: 0;
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`

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
	}
`

export const CategoryButton = styled.button`
	display: flex;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	margin: 3px;
	padding: 5px 0;
	width: 47%;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	opacity: 0.8;
	background-color: ${({ theme }) => theme.colors.card};
	color: ${({ theme }) => theme.colors.font};

	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		width: 100%;
		max-width: none;

		img {
			height: 20px;
			width: 20px;
			flex: 1 1 50%;
		}

		span {
			flex: 1 1 50%;
			text-align: left;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		img {
			height: 20px;
			width: 20px;
			flex: 1 1 30%;
		}
		span {
			flex: 1 1 70%;
			text-align: left;
		}
	}

	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex: wrap;
		flex-direction: row;
		img {
			height: 25px;
			width: 25px;
		}
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}

	img {
		height: 20px;
		width: 20px;
		flex: 30%;
		pointer-events: none;
	}

	span {
		pointer-events: none;
		flex: 1 1 70%;
		text-align: left;
	}

	&:hover {
		opacity: 1;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.primary};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.secondary};
	}
`

export const Aside = styled.aside`
	display: flex;
	padding-left: 20px;
	flex: 1 1 30%;
	flex-direction: column;
	position: sticky;
	position: -webkit-sticky;
	top: 45px;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		display: none;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex: 1 1 10%;
		span {
			display: none;
		}
		img {
			margin: 0 auto;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`

export const TagSection = styled.div`
	z-index: 10;
	.tag {
		cursor: pointer;
	}

	p {
		background-color: ${({ theme }) => theme.colors.button};
		padding: 5px 10px;
		margin: 3px;
		font-size: 1rem;
		display: inline-block;
		border-radius: 10px;
	}

	p:hover {
		opacity: 0.9;
		transform: scale(0.98);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-bottom: 0;

		p {
			z-index: 11;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`

export const TagContainer = styled.div`
	display: flex;
	flex: wrap;
	transition: 0.5s;
	border-radius: 10px;

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 5px;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`
export const TagBox = styled.div`
	display: flex;
	flex: wrap;
	justify-content: flex-end;
`

export const TagButton = styled.button`
	border-radius: 8px;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	margin: 3px;
	padding: 3px 5px;
	opacity: 0.8;
	background-color: ${({ theme }) => theme.colors.card};
	color: ${({ theme }) => theme.colors.font};

	.icon {
		background: none;
		outline: none;
		border: none;
		cursor: pointer;
	}
	&:hover {
		opacity: 1;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		color: ${({ theme }) => theme.colors.secondary};
		box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.primary};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.primary};
	}

	span {
		color: ${({ theme }) => theme.colors.font};
		padding-right: 3px;
	}
`
