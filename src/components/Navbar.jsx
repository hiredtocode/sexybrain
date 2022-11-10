import { Link } from 'react-router-dom';
// import transitions from 'bootstrap';
import './Navbar.scss';

const Navbar = ({ active, setActive, user, handleLogout }) => {
	const userId = user?.uid;

	return (
		<nav className='navbar'>
			<h1>The Blog</h1>
			<ul className='links'>
				<Link to='/'>
					<li
						className={`nav-item ${active === 'home' ? 'active' : ''}`}
						onClick={() => setActive('home')}
					>
						Home
					</li>
				</Link>
				<Link to='/create'>
					<li
						className={`nav-item ${active === 'create' ? 'active' : ''}`}
						onClick={() => setActive('create')}
					>
						Create
					</li>
				</Link>
				{userId ? (
					<Link to='/'>
						{/* <img
							id='profileImage'
							src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
							alt='profile'
						/> */}
						{/* <p>{user?.displayName}</p> */}
						<li onClick={handleLogout}>Logout</li>
					</Link>
				) : (
					<Link to='/auth'>
						<li
							className={`nav-item ${active === 'login' ? 'active' : ''}`}
							onClick={() => setActive('login')}
						>
							Login
						</li>
					</Link>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
