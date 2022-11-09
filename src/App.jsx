import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Resume from './pages/Resume';
import './App.scss';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/create' element={<Create />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='/blogs/:id' element={<BlogDetails />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;