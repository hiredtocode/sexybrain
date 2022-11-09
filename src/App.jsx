import { useState, useEffect } from 'react';
import './App.scss';
import './index.scss';
import './media-query.scss';
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
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
function App() {
	const [active, setActive] = useState('home');
	const [user, setUser] = useState(null);

	const navigate = useNavigate();

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
			setActive('login');
			navigate('/auth');
		});
	};

	return (
		<div className='App'>
			<Navbar setActive={setActive} active={active} user={user} handleLogout={handleLogout} />
			<ToastContainer position='top-center' />
			<div className='content'>
				<ToastContainer />
				<Routes>
					<Route path='/' element={<Home setActive={setActive} user={user} />} />
					<Route path='/blogs/:id' element={<BlogDetails setActive={setActive} />} />
					<Route
						path='/create'
						element={user?.uid ? <AddEdit user={user} /> : <Navigate to='/' />}
					/>
					<Route
						path='/update/:id'
						element={
							user?.uid ? <AddEdit user={user} setActive={setActive} /> : <Navigate to='/' />
						}
					/>
					<Route path='/auth' element={<Auth setActive={setActive} setUser={setUser} />} />
					<Route path='/resume' element={<Resume />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
