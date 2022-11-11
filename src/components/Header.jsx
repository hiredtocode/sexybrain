import { Link } from 'react-router-dom';
// import transitions from 'bootstrap';
import { StyledHeader, Nav, Logo } from './styles/Header.styled.js';
import { Button } from './styles/Button.styled.js';
import JH from '../assets/img/jh-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiLogIn } from 'react-icons/fa';

const Header = ({ active, setActive, user, handleLogout }) => {
	const userId = user?.uid;

	return (
		<StyledHeader>
			<Nav>
				<div>
					<Link to='/'>
						<Logo src={JH} />
					</Link>
				</div>
				<div>
					<Link to='/'>
						<Button
							onClick={() => setActive('home')}
							className={` ${active === 'home' ? 'active' : ''}`}
						>
							Home
						</Button>
					</Link>
					{userId ? (
						<>
							<Link to='/create'>
								<Button
									onClick={() => setActive('create')}
									className={` ${active === 'create' ? 'active' : ''}`}
								>
									Create
								</Button>
							</Link>
							<Link to='/'>
								{/* <img
							id='profileImage'
							src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
							alt='profile'
						/> */}
								{/* <p>{user?.displayName}</p> */}
								<Button onClick={handleLogout}>Logout</Button>
							</Link>
						</>
					) : (
						<Link to='/auth'>
							<Button
								className={` ${active === 'login' ? 'active' : ''}`}
								onClick={() => setActive('login')}
							>
								Login
							</Button>
						</Link>
					)}
				</div>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
