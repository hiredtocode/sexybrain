import styled from 'styled-components';

export const TagSection = styled.aside`
	z-index: 10;
	padding-bottom: 10px;

	.tag {
		cursor: pointer;
	}

	p {
		background-color: ${({ theme }) => theme.colors.button};
		transition: 0.8s;
		padding: 5px 10px;
		margin: 3px;
		font-size: 1rem;
		display: inline-block;
		border-radius: 10px;
	}

	p:hover {
		opacity: 0.9;
		transform: scale(0.98);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

		background: linear-gradient(
			45deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}
`;

export const TagContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.card};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	padding: 15px;
	border-radius: 10px;
	transition: 0.8s;
`;
