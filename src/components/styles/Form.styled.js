import styled from 'styled-components/macro'

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	min-width: 400px;
`

export const FormInput = styled.input`
	width: 100%;
	height: 40px;
	font-size: 1.2rem;
	border: 1px solid ${({ theme }) => theme.colors.accent};
	border-radius: 0.4rem;
	background: none;
	margin: 10px 0;
	color: ${({ theme }) => theme.colors.font};

	&:focus {
		border: 1.5px solid ${({ theme }) => theme.colors.input};
		background: ${({ theme }) => theme.colors.card};
	}
`

export const FormSubmitButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	width: 100%;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.colors.hovered};
	color: ${({ theme }) => theme.colors.font};

	&:hover {
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

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}
`

export const FormCancelButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	width: 100%;
	margin-right: 10px;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.colors.cancelButton};
	color: ${({ theme }) => theme.colors.heading};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.cancelHover},
			${({ theme }) => theme.colors.cancelHovered}
		);
		color: ${({ theme }) => theme.colors.heading};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.heading};
	}
`
export const LoginButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	width: 100%;
	margin-top: 20px;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.colors.primary};

	color: ${({ theme }) => theme.colors.font};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
		color: ${({ theme }) => theme.colors.font};
	}

	&:hover span {
		color: ${({ theme }) => theme.colors.font};
	}
`
export const FormLabel = styled.label`
	background-color: ${({ theme }) => theme.colors.card};
	color: ${({ theme }) => theme.colors.font};
	font-size: 1.3rem;
	top: -20px;
`

export const Form = styled.form`
	display: flex;
	position: fixed;
	top: 130px;
	left: 20px;
	flex-direction: column;
	justify-content: space-around;
	padding: 20px;
	height: 80vh;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.colors.card};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	width: 30%;
`

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 2rem 2rem;
	border-radius: 1rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	background-color: ${({ theme }) => theme.colors.card};
`

export const FormSelect = styled.select`
	top: 0;
	left: 0;
	width: 100%;
	font-size: 1rem;
	border: 1px solid #dadce0;
	border-radius: 0.5rem;
	outline: none;
	margin: 10px 0;
	background: none;
	z-index: 1;
	color: ${({ theme }) => theme.colors.font};
	background-color: ${({ theme }) => theme.colors.card};
`
export const Textarea = styled.textarea`
	width: 100%;
	height: 20vh;
	margin: 10px 0;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.font};
	background-color: ${({ theme }) => theme.colors.card};
`
export const MarkdownArea = styled.div`
	width: 50%;
	height: 100vh;
	padding: 20px;
	color: ${({ theme }) => theme.colors.font};
`

export const MarkdownContainer = styled.div`
	width: 70%;
	padding: 20px;
	background: ${({ theme }) => theme.colors.card};
	border-radius: 1rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	margin-left: 1em;
	height: 80vh;
`
