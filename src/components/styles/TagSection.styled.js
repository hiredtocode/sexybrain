import styled from 'styled-components/macro';

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
			45deg,
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
			color: white;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`;

export const TagContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.card};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	display: flex;
	flex: wrap;
	transition: 0.5s;
	padding: 15px;
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
	} ;
`;
export const TagBox = styled.div`
	display: flex;
	flex: wrap;
	justify-content: flex-end;
`;

export const TagButton = styled.button`
	border-radius: 8px;
	border: none;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	transition: 0.5s;
	cursor: pointer;
	font-size: 1rem;
	margin: 3px;
	padding: 3px 5px;
	background-color: ${({ theme }) => theme.colors.button2};
	color: ${({ theme }) => theme.colors.font};

	.icon {
		background: none;
		outline: none;
		border: none;
		cursor: pointer;
	}
	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		background: linear-gradient(
			45deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}
	&.active {
		background: ${({ theme }) => theme.colors.active};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}
`;
