import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const FormInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	border: 1px solid #dadce0;
	border-radius: 0.5rem;
	outline: none;
	background: none;
	z-index: 1;

	&:focus {
		border: 1.5px solid #1a73e8;
	}
`;

export const FormButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0 10px;
	width: 100%;
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
export const FormCancelButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0 10px;
	width: 100%;
	padding: 10px 15px;
	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ color }) => color || '#333'};

	&:hover {
		opacity: 0.9;
		transition: 0.5s;
		transform: scale(0.98);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
		background: linear-gradient(45deg, #d33737, #ff5555);
		color: white;
	}

	&:hover span {
		color: #fff;
	}
`;

export const FormLabel = styled.label`
	position: absolute;
	left: 1rem;
	top: 1rem;
	padding: 0 0.25rem;
	background-color: #fff;
	color: #80868b;
	font-size: 1rem;
	transition: 0.3s;

	&:focus {
		top: -0.5rem;
		left: 0.8rem;
		color: #1a73e8;
		font-size: 0.75rem;
		font-weight: 500;
		z-index: 10;
	}
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 800px;
	padding: 4rem 2rem;
	height: 800px;
	border-radius: 1rem;
	box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
`;
export const FormSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	border: 1px solid #dadce0;
	border-radius: 0.5rem;
	outline: none;
	background: none;
	z-index: 1;
`;
