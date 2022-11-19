import { useState, useEffect, createContext } from 'react';
// import './App.scss';
// import './index.scss';
// import './media-query.scss';
import Home from './pages/Home';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails from './pages/BlogDetails';
import AddEdit from './pages/AddEdit';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import { auth } from './firebase.config';
import { signOut } from 'firebase/auth';
import Header from './components/Header';
import Resume from './pages/Resume';
import { Container } from './components/styles/Container.styled.js';
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

	const lightTheme = {
		colors: {
			header: 'transparent',
			body: '#E7F6F2',
			footer: '#003333',
			button: '#E7F6F2',
			button2: '#ffffff',
			font: '#395B64',
			card: '#fcfcfc',
			hover: '#befdff',
			hovered: '#ffffff',
			cancelButton: '#f6e7e7',
			cancelHover: '#ffbebe',
			cancelHovered: '#ffffff',
			subText: '#A5C9CA',
			accent: '#395B64',
			underline: '#A5C9CA',
			active: '#ff0000',
		},

		xs: '575.98px',
		s: '767.98px',
		md: '991.98px',
		lg: '1199.98px',
	};
	const darkTheme = {
		colors: {
			header: '',
			body: '#2C3333',
			footer: '#2E3445',
			button: '#347485',
			button2: '#347485',
			font: '#E7F6F2',
			card: '#395B64',
			hover: '#395B64',
			hovered: '#2eb6bb',
			cancelButton: '#853434',
			cancelHover: '#643939',
			cancelHovered: '#bb2e2e',
			subText: '#A5C9CA',
			accent: '#A5C9CA',
			underline: '#A5C9CA',
			active: '#2eb6bb',
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
				<ToastContainer />
				<Container>
					<Routes>
						<Route path='/' element={<Home setActive={setActive} user={user} />} />
						<Route path='/detail/:id' element={<BlogDetails setActive={setActive} />} />
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
				</Container>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
