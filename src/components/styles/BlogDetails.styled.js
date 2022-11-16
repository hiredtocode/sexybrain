import styled from 'styled-components';

export const BlogTitleBox = styled.div`
	z-index: 555;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;

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

		h2 {
			color: white;
			font-weight: 300;
			.single & {
				font-size: 72px;
			}
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

		font-size: 15px;
		color: #222;
		text-decoration: none;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		padding-bottom: 15px;
	}
`;
export const Author = styled.p`
	display: inline-block;
	font-weight: 500;
	font-size: 1.2rem;
`;
