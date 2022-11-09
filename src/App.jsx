import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import BlogDetails from './pages/BlogDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Resume from './pages/Resume';
import Auth from './pages/Auth';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase.config';

function App() {
	const [active, setActive] = useState('home');
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setUser(authUser);
			} else {
				setUser(null);
			}
		});
	}, []);

	return (
		<Router>
			<div className='App'>
				<Navbar setActive={setActive} active={active} user={user} />
				<div className='content'>
					<ToastContainer />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='/create' element={<AddEdit />} />
						<Route path='/update/:id' element={<AddEdit />} />
						<Route path='/blogs/:id' element={<BlogDetails />} />
						<Route path='/auth' element={<Auth />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
