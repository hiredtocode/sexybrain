import styled from 'styled-components/macro';

const CategoryButton = styled.button`
	display: flex;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 500;
	margin: 3px;
	padding: 5px 0;
	background-color: ${({ theme }) => theme.colors.card};
	color: ${({ theme }) => theme.colors.font};
	transition: 0.3s;
	width: 47%;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	opacity: 0.8;
	box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.primary};

	img {
		height: 20px;
		width: 20px;
		flex: 1 1 30%;
		pointer-events: none;
	}

	span {
		pointer-events: none;
		flex: 1 1 70%;
		text-align: left;
	}
	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
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
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
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

	&:hover {
		transition: 0.5s;
		opacity: 1;
		font-weight: 500;
		font-size: 1rem;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.primary};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}
`;

export default CategoryButton;
