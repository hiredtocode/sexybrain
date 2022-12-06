import { useContext } from 'react';
import { ThemeContext } from '../App';
import { NavLink, Link } from 'react-router-dom';
import { StyledHeader, Nav, Logo, LinkContainer } from './styles/Header.styled.js';
import { Button } from './styles/Button.styled.js';
import JHLogo from '../assets/img/jh-logo.png';
import JHLogoWhite from '../assets/img/jh-logo-white.png';
import GithubButton from './GithubButton';
import DarkLightMode from './DarkLightMode';

const Header = (props) => {
	const { user, handleLogout } = props;
	const userId = user?.uid;

	const { isDark } = useContext(ThemeContext);

	return (
		<StyledHeader>
			<Nav>
				<div>
					<NavLink to='/'>
						<Logo
							src={isDark ? JHLogoWhite : JHLogo}
							alt='logo'
							aria-label='Click to go to the home page'
						/>
					</NavLink>
				</div>
				{userId ? (
					<>
						{/* Create and Logout button appears if logged in */}
						<NavLink to='/create'>
							<Button>Create</Button>
						</NavLink>
						<Link to='/'>
							<Button onClick={handleLogout}>Logout</Button>
						</Link>
						{/* Create and Logout button appears if logged in END */}
					</>
				) : (
					// if not logged in
					<NavLink to='/auth'>
						<Button>Login</Button>
					</NavLink>
					// if not logged in END
				)}
				{/* Navbar menu container */}
				<LinkContainer>
					<>
						<NavLink to='/'>
							<Button>블로그</Button>
						</NavLink>
						<NavLink to='/resume'>
							<Button>이력서</Button>
						</NavLink>
						<NavLink to='/portfolio'>
							<Button>포트폴리오</Button>
						</NavLink>
						{/* Resume page menu END*/}
					</>
					{/* Dark / light mode toggle */}
					<DarkLightMode />
					{/* Dark / light mode toggle END */}
					{/* Github icon */}
					<GithubButton />
					{/* Github icon END */}
				</LinkContainer>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
