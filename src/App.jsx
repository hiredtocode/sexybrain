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

export const ThemeContext = createContext();

function App() {
	const [isDark, setIsDark] = useState(true);
	const value = {
		isDark,
		setIsDark,
	};
	const [active, setActive] = useState('home');
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
			secondary: '#2b6e62',
			secondaryBackground: '#f4fbf9',
			accent: '#575fb7',
			accentBackground: '#f3f4fd',
			active: '#087ea4',
			body: '##ffffff',
			subText: '#9ca3af',

			header: 'transparent',
			footer: '#003333',
			button: '#ffffff',
			font: '#404756',
			card: '#faffff',
			hover: '#ffffff',
			hovered: '#90fbff',
			cancelButton: '#f6e7e7',
			cancelHover: '#ffbebe',
			cancelHovered: '#ffffff',
			lineBreak: '#d5e6eb',
			underline: '#A5C9CA',
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
			primary: '#149eca',
			secondary: '#44ac99',
			secondaryBackground: '#243539',
			active: '#149eca',
			accent: '#575fb7',
			accentBackground: '#242943',
			body: '#23272f',
			subText: '#6b7280',

			header: 'transparent',
			footer: '#2E3445',
			button: '#575fb7',
			font: '#f6f7f9',
			card: '#243539',
			hover: '#395B64',
			hovered: '#239296',
			cancelButton: '#853434',
			cancelHover: '#643939',
			cancelHovered: '#bb2e2e',
			lineBreak: '#536263ff',
			underline: '#A5C9CA',
			input: '#3150ff',
			highlight: '#0d3026',
			titleBackgroundColor1: 'rgba(255, 255, 255, 0.014425753211440795)',
			titleBackgroundColor2: '#395B64',
			titleBackgroundColor3: 'rgba(252, 176, 69, 0)',
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
		});
	};

	return (
		<ThemeContext.Provider value={value}>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyles />
				<Header setActive={setActive} active={active} user={user} handleLogout={handleLogout} />
				<ToastContainer position='bottom-right' />
				<RootContainer>
					<Routes>
						<Route path='/' element={<Home setActive={setActive} user={user} />} />
						<Route path='/detail/:id' element={<BlogDetails setActive={setActive} />} />
						<Route path='/portfolio/' element={<Portfolio setActive={setActive} />} />
						<Route
							path='/create'
							element={user?.uid ? <AddEdit user={user} /> : <Navigate to='/auth' />}
						/>
						<Route
							path='/update/:id'
							element={
								user?.uid ? <AddEdit user={user} setActive={setActive} /> : <Navigate to='/auth' />
							}
						/>
						<Route path='/auth' element={<Auth setActive={setActive} setUser={setUser} />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</RootContainer>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
