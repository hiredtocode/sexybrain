import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link, useLocation } from 'react-router-dom';
import { StyledHeader, Nav, Logo, LinkContainer } from './styles/Header.styled.js';
import Button from './styles/Button.styled.js';
import JHLogo from '../assets/img/jh-logo.png';
import JHLogoWhite from '../assets/img/jh-logo-white.png';
import { GithubIconBlack, GithubIconWhite, GithubIconContainer } from './styles/Github.styled.js';
import GithubIconB from '../assets/img/github-black.svg';
import GithubIconW from '../assets/img/github-white.svg';
import { MoonIcon, SunIcon } from '../assets/icons';

const Header = ({ active, setActive, user, handleLogout }) => {
	const userId = user?.uid;
	const location = useLocation();
	const path = location.pathname;
	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<StyledHeader>
			<Nav>
				<div>
					<Link to='/'>
						<Logo
							src={isDark ? JHLogoWhite : JHLogo}
							alt='logo'
							aria-label='Click to go to the home page'
						/>
					</Link>
				</div>
				<LinkContainer>
					{path !== '/resume' ? (
						<>
							{userId ? (
								<>
									{/* Create and Logout button appears if logged in */}
									<Link to='/create'>
										<Button
											onClick={() => setActive('create')}
											className={` ${active === 'create' ? 'active' : ''}`}
										>
											Create
										</Button>
									</Link>
									<Link to='/'>
										<Button onClick={handleLogout}>Logout</Button>
									</Link>
									{/* Create and Logout button appears if logged in END */}
								</>
							) : (
								// if not logged in
								<Link to='/auth'>
									<Button
										className={` ${active === 'login' ? 'active' : ''}`}
										onClick={() => setActive('login')}
									>
										Login
									</Button>
								</Link>
								// if not logged in END
							)}
						</>
					) : (
						<>
							{/* Set the "Home" button to display "Blog" instead when it's in the Resume page */}
							<Link to='/'>
								<Button
									onClick={() => setActive('home')}
									className={` ${active === 'home' ? 'active' : ''}`}
								>
									<span>Blog</span>
								</Button>
							</Link>
							{/* Set the "Home" button to display "Blog" instead when it's in the Resume page END */}
						</>
					)}

					{/* Dark / light mode toggle */}
					<Button
						onClick={() => setIsDark(!isDark)}
						style={{ border: 'none', cursor: 'pointer' }}
						aria-label='Light dark mode'
					>
						{isDark ? <MoonIcon /> : <SunIcon />}
					</Button>
					{/* Dark / light mode toggle END */}

					{/* Github icon */}
					<GithubIconContainer
						href='https://github.com/hiredtocode'
						target='_blank'
						rel='noreferrer'
					>
						<GithubIconWhite
							src={GithubIconW}
							style={isDark ? { opacity: 0.9 } : null}
							alt='Github'
							aria-label='Click to go to my github page'
						/>
						<GithubIconBlack
							src={GithubIconB}
							alt='Github'
							aria-label='Click to go to my github page'
						/>
					</GithubIconContainer>
					{/* Github icon END */}
				</LinkContainer>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
