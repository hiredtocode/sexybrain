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
`;

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
	cursor: pointer;
	font-size: 1rem;
	margin: 3px;
	padding: 3px 5px;
	background-color: ${({ theme }) => theme.colors.button};
	border: 1px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.font};
	opacity: 0.8;

	.icon {
		background: none;
		outline: none;
		border: none;
		cursor: pointer;
	}
	&:hover {
		opacity: 1;
		transform: scale(0.98);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		border: 1px solid ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.font};
		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}

	span {
		color: ${({ theme }) => theme.colors.secondary};
		padding-right: 3px;
	}
`;
