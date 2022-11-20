import styled from 'styled-components/macro';

const CategoryButton = styled.button`
	border-radius: 8px;
	border: none;
	display: flex;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 1rem;
	font-weight: 500;
	margin: 3px;
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.button2};
	color: ${({ theme }) => theme.colors.font};
	transition: 0.5s;

	img {
		height: 20px;
		width: 20px;
	}

	&:hover {
		transition: 0.5s;
		opacity: 0.9;
		font-weight: 500;
		font-size: 1rem;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		background: linear-gradient(
			45deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}

	span {
		padding-left: 10px;
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
		span {
			margin: 0 auto;
		}
	} ;
`;

export default CategoryButton;
