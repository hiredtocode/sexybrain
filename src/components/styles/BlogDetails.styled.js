import styled from 'styled-components/macro';

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
`;

export const BlogDetail = styled.div`
	display: flex;
	flex-direction: column;

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
`;
export const Author = styled.p`
	display: inline-block;
	font-weight: 500;
	font-size: 1.2rem;
`;

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

	hr:after {
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
`;
