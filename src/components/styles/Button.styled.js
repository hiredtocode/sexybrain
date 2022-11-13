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
`;

export default Button;
