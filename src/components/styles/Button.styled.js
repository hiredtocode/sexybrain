import styled from 'styled-components';

const Button = styled.button`
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0 5px;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.colors.button2};
	color: ${({ theme }) => theme.colors.font};
	transition: 0.8s;

	.icon {
		background: none;
		outline: none;
		border: none;
		cursor: pointer;
	}
	&:hover {
		opacity: 0.9;
		transition: 0.5s;
		transform: scale(0.98);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
		background: linear-gradient(
			45deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}
	&.active {
		color: ${({ theme }) => theme.colors.active};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}
`;

export default Button;
