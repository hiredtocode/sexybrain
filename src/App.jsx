import { useState, useEffect, createContext } from 'react';

import Home from './pages/Home';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails from './pages/BlogDetails';
import Portfolio from './pages/Portfolio';
import AddEdit from './pages/AddEdit';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import { auth } from './firebase.config';
import { signOut } from 'firebase/auth';
import Header from './components/Header';
import Resume from './pages/Resume';
import { RootContainer } from './components/styles/RootContainer.styled.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { toast } from 'react-toastify';
import Footer from './components/Footer';

export const ThemeContext = createContext();

function App() {
	const [isDark, setIsDark] = useState(true);
	const value = {
		isDark,
		setIsDark,
	};
	const [user, setUser] = useState(null);

	const navigate = useNavigate();

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
			strongAccent: '#332316',
			strongAccentBackground: '#ffc773',

			header: 'transparent',
			footer: '#003333',
			button: '#ffffff',
			font: '#404756',
			card: '#faffff',
			hover: '#f6fdff',
			hovered: '#b3ecff',
			cancelButton: '#f6e7e7',
			cancelHover: '#ffbebe',
			cancelHovered: '#ffffff',
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
	};
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
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser(authUser);
			} else {
				setUser(null);
			}
		});
	}, []);
	const handleLogout = () => {
		signOut(auth).then(() => {
			setUser(null);
			navigate('/');
			toast.info(`You've been logged out.`);
		});
	};

	return (
		<ThemeContext.Provider value={value}>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyles />
				<Header user={user} handleLogout={handleLogout} />
				<ToastContainer position='bottom-right' />

				<RootContainer>
					<Routes>
						<Route path='/' element={<Home user={user} />} />
						<Route path='/detail/:id' element={<BlogDetails user={user} />} />
						<Route path='/portfolio/' element={<Portfolio />} />
						<Route
							path='/create'
							element={user?.uid ? <AddEdit user={user} /> : <Navigate to='/auth' />}
						/>
						<Route
							path='/update/:id'
							element={user?.uid ? <AddEdit user={user} /> : <Navigate to='/auth' />}
						/>
						<Route path='/auth' element={<Auth setUser={setUser} />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</RootContainer>
				<Footer />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
