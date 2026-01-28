import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useTitle from '../components/hook/useTitle.js'
import {
	FormContainer,
	FormInput,
	FormLabel,
	LoginButton,
	LoginForm,
} from '../components/styles/Form.styled.js'
import { H1 } from '../components/styles/General.styled.js'
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
	const inputRef = useRef()
	const { email, password } = state

	const navigate = useNavigate()

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const handleAuth = async e => {
		e.preventDefault()
		if (!signUp) {
			if (!email || !password) {
				return toast.error('All fields are mandatory to fill')
			}
			try {
				const { user } = await signInWithEmailAndPassword(auth, email, password)
				setUser(user)
				toast.success(`Login Success. Welcome Jason!`)
				navigate('/')
			} catch (err) {
				const code = err?.code ?? ''
				if (code === 'auth/user-not-found') {
					toast.error('No account found with this email. Please sign up first.')
				} else if (code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
					toast.error('Invalid email or password.')
				} else if (code === 'auth/invalid-email') {
					toast.error('Please enter a valid email address.')
				} else if (code === 'auth/too-many-requests') {
					toast.error('Too many attempts. Please try again later.')
				} else {
					toast.error(err?.message || 'Login failed. Please try again.')
				}
			}
			return
		}
		navigate('/')
	}

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<>
			{/* <!-- ADMIN ACTIONS --> */}
			<FormContainer>
				<LoginForm onSubmit={handleAuth}>
					<H1>{!signUp ? 'Sign-In' : 'Sign-Up'}</H1>

					<FormLabel htmlFor='email'>Email</FormLabel>
					<FormInput
						type='email'
						ref={inputRef}
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
