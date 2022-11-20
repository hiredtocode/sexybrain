import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import {
	FormContainer,
	FormInput,
	FormLabel,
	LoginForm,
	FormButton,
} from '../components/styles/FormContainer.styled.js';
import './Auth.scss';

const initialState = {
	email: '',
	password: '',
};

const Auth = ({ setActive, setUser }) => {
	const [state, setState] = useState(initialState);
	const [signUp, setSignUp] = useState(false);

	const { email, password } = state;

	const navigate = useNavigate();

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleAuth = async (e) => {
		e.preventDefault();
		if (!signUp) {
			if (email && password) {
				const { user } = await signInWithEmailAndPassword(auth, email, password);
				setUser(user);
				setActive('home');
			} else {
				return toast.error('All fields are mandatory to fill');
			}
		}

		navigate('/');
	};

	return (
		<>
			<FormContainer>
				<div className='l-form'>
					<LoginForm className='form' onSubmit={handleAuth}>
						<h1 className='form__title'>{!signUp ? 'Sign-In' : 'Sign-Up'}</h1>

						<div className='form__div'>
							<FormInput
								type='email'
								autoComplete='username'
								className='form__input'
								name='email'
								value={email}
								onChange={handleChange}
							/>
							<FormLabel htmlFor='email'>Email</FormLabel>
						</div>

						<div className='form__div'>
							<FormInput
								type='password'
								autoComplete='current-password'
								className='form__input'
								name='password'
								value={password}
								onChange={handleChange}
							/>
							<FormLabel htmlFor='password'>Password</FormLabel>
						</div>

						<FormButton className={`btn ${!signUp ? 'btn-sign-in' : 'btn-sign-up'}`} type='submit'>
							{!signUp ? 'Login' : 'Sign-up'}
						</FormButton>
					</LoginForm>
				</div>
			</FormContainer>
		</>
	);
};

export default Auth;
