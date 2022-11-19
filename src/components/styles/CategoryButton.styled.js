import styled from 'styled-components';

const CategoryButton = styled.button`
	border-radius: 8px;
	border: none;
	display: flex;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 1.1rem;
	font-weight: 500;
	margin: 3px;
	padding: 10px 10px;
	background-color: ${({ theme }) => theme.colors.button2};
	transition: 0.8s;
	color: ${({ theme }) => theme.colors.font};

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

	&:hover span {
		transition: 0.5s;
		color: ${({ theme }) => theme.colors.font};
	}

	span {
		padding-left: 10px;
	}
`;

export default CategoryButton;
