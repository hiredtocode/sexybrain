import { Link } from 'react-router-dom';
// import transitions from 'bootstrap';
import './Navbar.scss';

const Navbar = ({ active, setActive, user, handleLogout }) => {
	const userId = user?.uid;

	return (
		<nav className='navbar'>
			<h1>The Blog</h1>
			<div className='links'>
				<Link to='/'>
					<ul>
						<li
							className={`navbar ${active === 'home' ? 'active' : ''}`}
							onClick={() => setActive('home')}
						>
							Home
						</li>
					</ul>
				</Link>
				<Link to='/create'>
					<ul>
						<li
							onClick={() => setActive('create')}
							className={`navbar ${active === 'create' ? 'active' : ''}`}
						>
							Create
						</li>
					</ul>
				</Link>
				{userId ? (
					<>
						{/* <img
							id='profileImage'
							src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
							alt='profile'
						/> */}
						<p>{user?.displayName}</p>
						<ul>
							<li onClick={handleLogout}>Logout</li>
						</ul>
					</>
				) : (
					<Link to='/auth'>
						<ul>
							<li
								className={`nav-item nav-link ${active === 'login' ? 'active' : ''}`}
								onClick={() => setActive('login')}
							>
								Login
							</li>
						</ul>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
