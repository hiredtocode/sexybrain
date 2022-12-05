import { useContext } from 'react';
import { ThemeContext } from '../App';
import { NavLink, Link } from 'react-router-dom';
import { StyledHeader, Nav, Logo, LinkContainer } from './styles/Header.styled.js';
import { Button } from './styles/Button.styled.js';
import JHLogo from '../assets/img/jh-logo.png';
import JHLogoWhite from '../assets/img/jh-logo-white.png';
import { GithubBottom, GithubTop, GithubIconContainer } from './styles/Github.styled.js';
import Github from '../assets/img/github.svg';
import GithubBlack from '../assets/img/github-black.svg';
import GithubWhite from '../assets/img/github-white.svg';
import { MoonIcon, SunIcon } from '../assets/icons';

const Header = (props) => {
	const { user, handleLogout } = props;
	const userId = user?.uid;

	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<StyledHeader>
			<Nav>
				<div>
					<NavLink to='/blog'>
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
						<Link to='/blog'>
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
						<NavLink to='/blog'>
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
