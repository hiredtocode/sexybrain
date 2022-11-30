import styled from 'styled-components/macro';

export const Button = styled.button`
	border-radius: 50px;
	border: none;
	transition: 0.5s;

	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0 5px;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.colors.button};
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
