import { Link } from 'react-router-dom';

const Navbar = ({ active, setActive, user, handleLogout }) => {
	const userId = user?.uid;
	console.log('userId:', userId);
	console.log('name:', user?.displayName);

	return (
		<nav className='navbar'>
			<h1>The Blog</h1>
			<div className='links'>
				<Link to='/'>
					<li
						className={`navbar ${active === 'home' ? 'active' : ''}`}
						onClick={() => setActive('home')}
					>
						Home
					</li>
				</Link>
				<Link to='/create'>
					<li
						onClick={() => setActive('create')}
						className={`navbar ${active === 'create' ? 'active' : ''}`}
					>
						Create
					</li>
				</Link>
			</div>
			{userId ? (
				<>
					<div className='profile-logo'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
							alt='logo'
							style={{
								width: '30px',
								height: '30px',
								borderRadius: '50%',
								marginTop: '12px',
							}}
						/>
					</div>
					<p style={{ marginTop: '12px', marginLeft: '5px' }}>{user?.displayName}</p>
					<li className='nav-item nav-link' onClick={handleLogout}>
						Logout
					</li>
				</>
			) : (
				<Link to='/auth' style={{ textDecoration: 'none' }}>
					<li
						className={`nav-item nav-link ${active === 'login' ? 'active' : ''}`}
						onClick={() => setActive('login')}
					>
						Login
					</li>
				</Link>
			)}
		</nav>
	);
};

export default Navbar;
