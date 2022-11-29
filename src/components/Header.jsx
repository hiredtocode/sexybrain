import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link, useLocation } from 'react-router-dom';
import { StyledHeader, Nav, Logo, LinkContainer } from './styles/Header.styled.js';
import { Button } from './styles/Button.styled.js';
import JHLogo from '../assets/img/jh-logo.png';
import JHLogoWhite from '../assets/img/jh-logo-white.png';
import { GithubBottom, GithubTop, GithubIconContainer } from './styles/Github.styled.js';
import Github from '../assets/img/github.svg';
import GithubBlack from '../assets/img/github-black.svg';
import GithubWhite from '../assets/img/github-white.svg';
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
				{/* Navbar menu container */}
				<LinkContainer>
					<>
						<Link to='/resume'>
							<Button
								onClick={() => setActive('resume')}
								className={` ${active === 'resume' ? 'active' : ''}`}
							>
								Resume
							</Button>
						</Link>
						<Link to='/'>
							<Button
								onClick={() => setActive('home')}
								className={` ${active === 'home' ? 'active' : ''}`}
							>
								<span>Blog</span>
							</Button>
						</Link>

						<Link to='/portfolio'>
							<Button
								onClick={() => setActive('portfolio')}
								className={` ${active === 'portfolio' ? 'active' : ''}`}
							>
								<span>Portfolio</span>
							</Button>
						</Link>
						{/* Resume page menu END*/}
					</>

					{/* Dark / light mode toggle */}
					<Button
						onClick={() => setIsDark(!isDark)}
						style={{
							border: 'none',
							cursor: 'pointer',
							height: '42px',
							width: '65px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
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
						{isDark ? (
							<>
								<GithubTop
									src={Github}
									alt='Github Icon'
									aria-label='Click to go to my github page'
									style={{ outlineWidth: '1px', outlineStyle: 'groove', outlineColor: 'black' }}
								/>
								<GithubBottom
									src={GithubWhite}
									alt='Github bottom icon'
									aria-label='Click to go to my github page'
									style={{ outlineWidth: '1px', outlineStyle: 'groove', outlineColor: 'black' }}
								/>
							</>
						) : (
							<>
								<GithubTop
									src={GithubWhite}
									alt='Github top icon'
									aria-label='Click to go to my github page'
								/>
								<GithubBottom
									src={GithubBlack}
									alt='Github bottom icon'
									aria-label='Click to go to my github page'
								/>
							</>
						)}
					</GithubIconContainer>
					{/* Github icon END */}
				</LinkContainer>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
