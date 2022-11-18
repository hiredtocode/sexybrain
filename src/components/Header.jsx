import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link, useLocation } from 'react-router-dom';
import { StyledHeader, Nav, Logo, LinkContainer } from './styles/Header.styled.js';
import Button from './styles/Button.styled.js';
import JH from '../assets/img/jh-logo.png';
import {
	GithubImageBlack,
	GithubImageWhite,
	GithubImageContainer,
} from './styles/Github.styled.js';
import GithubImageB from '../assets/img/github-black.svg';
import GithubImageW from '../assets/img/github-white.svg';
import { MoonIcon, SunIcon } from '../assets/icons';

const Header = ({ active, setActive, user, handleLogout }) => {
	const userId = user?.uid;
	const location = useLocation();
	const path = location.pathname;
	const { isDark, setIsDark } = useContext(ThemeContext);

	if (path === '/resume')
		return (
			<StyledHeader>
				<Nav>
					<div>
						<Link to='/'>
							<Logo src={JH} />
						</Link>
					</div>
					<LinkContainer>
						{path !== '/resume' ? (
							<>
								{/* <Link to='/'>
								<Button
									onClick={() => setActive('home')}
									className={` ${active === 'home' ? 'active' : ''}`}
								>
									Home
								</Button>
							</Link> */}
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
							</>
						) : (
							<>
								<Link to='/'>
									<Button
										onClick={() => setActive('home')}
										className={` ${active === 'home' ? 'active' : ''}`}
									>
										<span>Blog</span>
									</Button>
								</Link>
							</>
						)}
						<Button
							onClick={() => setIsDark(!isDark)}
							style={{ border: 'none', cursor: 'pointer' }}
						>
							{isDark ? <MoonIcon /> : <SunIcon />}
						</Button>
						<GithubImageContainer
							href='https://github.com/hiredtocode'
							target='_blank'
							rel='noreferrer'
						>
							<GithubImageWhite src={GithubImageW} />
							<GithubImageBlack src={GithubImageB} />
						</GithubImageContainer>
					</LinkContainer>
				</Nav>
			</StyledHeader>
		);
};

export default Header;
