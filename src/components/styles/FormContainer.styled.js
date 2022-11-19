import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.card};
`;

export const FormInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: 1.2rem;
	border: 1px solid ${({ theme }) => theme.colors.accent};
	border-radius: 0.5rem;
	outline: none;
	background: none;
	z-index: 1;
	color: ${({ theme }) => theme.colors.font};

	&:focus {
		border: 1.5px solid ${({ theme }) => theme.colors.accent};
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
	background-color: ${({ theme }) => theme.colors.button};
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
		color: ${({ theme }) => theme.colors.font};
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
	background-color: ${({ theme }) => theme.colors.cancelButton};
	color: ${({ theme }) => theme.colors.font};

	&:hover {
		opacity: 0.9;
		transition: 0.5s;
		transform: scale(0.98);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
		background: linear-gradient(
			45deg,
			${({ theme }) => theme.colors.cancelHover},
			${({ theme }) => theme.colors.cancelHovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}
`;

export const FormLabel = styled.label`
	position: absolute;
	left: 1rem;
	top: 1rem;
	padding: 0 0.25rem;
	background-color: ${({ theme }) => theme.colors.card};
	color: ${({ theme }) => theme.colors.font};
	font-size: 1rem;

	&:focus {
		top: -0.5rem;
		left: 0.8rem;
		color: ${({ theme }) => theme.colors.font};
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

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	max-width: 400px;
	padding: 4rem 2rem;
	max-height: 400px;
	border-radius: 1rem;
	box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);

	button {
		margin: 0;
	}
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
	color: ${({ theme }) => theme.colors.font};
	background-color: ${({ theme }) => theme.colors.card};
`;
