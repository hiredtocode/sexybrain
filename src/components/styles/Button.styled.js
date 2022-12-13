import styled from 'styled-components/macro';

export const Button = styled.button`
	border-radius: 50px;
	border: none;
	transition: 0.5s;
	word-break: keep-all;
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
		transition: 0.8s;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}
`;
