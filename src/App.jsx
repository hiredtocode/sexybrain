import { useEffect, useState } from 'react'

import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import { RootContainer } from './components/styles/General.styled.js'
import GlobalStyles from './components/styles/Global'
import { auth } from './firebase.config'
import AddEditPost from './pages/AddEditPost'
import BlogPostDetails from './pages/BlogPostDetails'
import Home from './pages/Home'
import LoginOrSignup from './pages/LoginOrSignup'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

if (process.env.REACT_APP_NODE_ENV === 'production') {
	disableReactDevTools()
}

function App() {
	const [user, setUser] = useState(null)

	const navigate = useNavigate()

	const mode = useSelector(state => state.darkmode.mode)
	// 		/* xs: '575.98px' */
	// @media (max-width: ${({ theme }) => theme.xs}) {
	// }
	// /* s: '767.98px'  */
	// @media (max-width: ${({ theme }) => theme.s}) {
	// }
	// /* md: '991.98px'  */
	// @media (max-width: ${({ theme }) => theme.md}) {
	// }
	// /* lg: '1199.98px'  */
	// @media (max-width: ${({ theme }) => theme.lg}) {
	// } ;

	const lightTheme = {
		colors: {
			primary: '#087ea4',
			primaryBackground: '#e1f5ff',
			secondary: '#474e5c',
			heading: '#474e5c',
			secondaryBackground: '#f4fbf9',
			accent: '#575fb7',
			accentBackground: '#f3f4fd',
			active: '#e6f7ff',
			body: '#ffffff',
			subText: '#9ca3af',
			strongAccent: '#fabd62',
			strongAccentBackground: '#ffc773',

			header: 'transparent',
			footer: '#003333',
			button: '#ffffff',
			font: '#404756',
			card: '#faffff',
			hover: '#f6fdff',
			hovered: '#b3ecff',
			cancelButton: '#853434',
			cancelHover: '#643939',
			cancelHovered: '#bb2e2e',
			lineBreak: '#d5e6eb',
			underline: '#7fdefd',
			input: '#3150ff',
			highlight: '#d4fff5',
			titleBackgroundColor1: 'rgba(255, 255, 255, 0.014425753211440795)',
			titleBackgroundColor2: 'rgba(255, 255, 255, 1)',
			titleBackgroundColor3: 'rgba(252, 176, 69, 0)',
		},

		xs: '575.98px',
		s: '767.98px',
		md: '991.98px',
		lg: '1199.98px',
	}
	const darkTheme = {
		colors: {
			primary: '#64ffda',
			primaryBackground: '#023444',
			secondary: '#ccd6f6',
			heading: '#ccd6f6',
			secondaryBackground: '#243539',
			active: '#243539',
			accent: '#575fb7',
			accentBackground: '#242943',
			body: '#0a192f',
			subText: '#88a2aa',
			strongAccent: '#fabd62',
			strongAccentBackground: '#3e2c1e',

			header: 'transparent',
			footer: '#2E3445',
			button: '#343a46',
			font: '#a8b2d1',
			card: '#112240',
			hover: '#243539',
			hovered: '#00b187',
			cancelButton: '#853434',
			cancelHover: '#643939',
			cancelHovered: '#bb2e2e',
			lineBreak: '#536263ff',
			underline: '#107091',
			input: '#3150ff',
			highlight: '#023444',
			titleBackgroundColor1: 'rgba(255, 255, 255, 0.014425753211440795)',
			titleBackgroundColor3: 'rgba(252, 176, 69, 0)',
			titleBackgroundColor2: '#112240',
		},

		xs: '575.98px',
		s: '767.98px',
		md: '991.98px',
		lg: '1199.98px',
	}

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				setUser(authUser)
			} else {
				setUser(null)
			}
		})
	}, [])
	const handleLogout = () => {
		signOut(auth).then(() => {
			setUser(null)
			navigate('/')
			toast.info(`You've been logged out.`)
		})
	}

	return (
		<ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header user={user} handleLogout={handleLogout} />
			<ToastContainer position='bottom-right' />

			<RootContainer>
				<Routes>
					<Route path='/' element={<Home user={user} />} />
					<Route path='/detail/:id' element={<BlogPostDetails user={user} />} />
					<Route path='/portfolio/' element={<Portfolio />} />
					<Route
						path='/create'
						element={
							user?.uid ? <AddEditPost user={user} /> : <Navigate to='/auth' />
						}
					/>
					<Route
						path='/update/:id'
						element={
							user?.uid ? <AddEditPost user={user} /> : <Navigate to='/auth' />
						}
					/>
					<Route path='/auth' element={<LoginOrSignup setUser={setUser} />} />
					<Route path='/resume' element={<Resume />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</RootContainer>
			<Footer />
		</ThemeProvider>
	)
}

export default App
