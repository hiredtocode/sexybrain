import styled from 'styled-components';

const CategoryButton = styled.button`
	border-radius: 5px;
	border: none;
	display: flex;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 1.1rem;
	font-weight: 500;
	margin: 3px;
	padding: 5px 10px;
	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ color }) => color || '#333'};

	&:hover {
		opacity: 0.9;
		transition: 0.5s;
		transform: scale(0.98);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
		background: linear-gradient(45deg, #3776d3, #55c1ff);
		color: white;
	}

	&:hover span {
		color: #fff;
	}

	span {
		padding-left: 10px;
	}
`;

export default CategoryButton;
