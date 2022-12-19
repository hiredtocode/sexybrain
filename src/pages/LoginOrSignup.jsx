import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useTitle from '../components/hook/useTitle.js'
import {
	FormContainer,
	FormInput,
	FormLabel,
	LoginButton,
	LoginForm,
} from '../components/styles/FormContainer.styled.js'
import { H1 } from '../components/styles/Title.styled.js'
import { auth } from '../firebase.config'

const initialState = {
	email: '',
	password: '',
}
//TODO success / error message when logging in
const Auth = props => {
	useTitle('Login')
	const { setUser } = props
	const [state, setState] = useState(initialState)
	const [signUp] = useState(false)

	const { email, password } = state

	const navigate = useNavigate()

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const handleAuth = async e => {
		e.preventDefault()
		if (!signUp) {
			if (email && password) {
				const { user } = await signInWithEmailAndPassword(auth, email, password)
				setUser(user)
				toast.success(`Login Success. Welcome Jason!`)
			} else {
				return toast.error('All fields are mandatory to fill')
			}
		}

		navigate('/')
	}

	return (
		<>
			{/* <!-- ADMIN ACTIONS --> */}
			<FormContainer>
				<LoginForm onSubmit={handleAuth}>
					<H1>{!signUp ? 'Sign-In' : 'Sign-Up'}</H1>

					<FormLabel htmlFor='email'>Email</FormLabel>
					<FormInput
						type='email'
						autoComplete='username'
						name='email'
						value={email}
						onChange={handleChange}
					/>

					<FormLabel htmlFor='password'>Password</FormLabel>
					<FormInput
						type='password'
						autoComplete='current-password'
						name='password'
						value={password}
						onChange={handleChange}
					/>

					<LoginButton type='submit'>
						{!signUp ? 'Login' : 'Sign-up'}
					</LoginButton>
				</LoginForm>
			</FormContainer>
		</>
	)
}

export default Auth
