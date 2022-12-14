import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
	StyledHeader,
	Nav,
	LinkContainer,
	HamburgerMenu,
	MobileNav,
	ShowOnWebContainer,
	ShowOnMobileContainer,
} from './styles/Header.styled.js';
import GithubButton from './GithubButton';
import DarkLightMode from './DarkLightMode';
import Logo from './Logo';

const Header = (props) => {
	const { user, handleLogout } = props;
	const userId = user?.uid;
	const [isActive, setActive] = useState(false);

	const toggleHamburgerMenu = () => {
		setActive(!isActive);
	};

	return (
		<StyledHeader>
			<Nav>
				<div>
					<NavLink to='/'>
						<Logo />
					</NavLink>
				</div>
				{userId ? (
					<>
						{/* Create and Logout button appears if logged in */}
						<NavLink to='/create'>
							<span>Create</span>
						</NavLink>
						<Link to='/'>
							<span onClick={handleLogout}>Logout</span>
						</Link>
						{/* Create and Logout button appears if logged in END */}
					</>
				) : (
					// if not logged in
					<NavLink to='/auth'>
						<span>Login</span>
					</NavLink>
					// if not logged in END
				)}
				{/* Navbar menu container */}
				<LinkContainer>
					<NavLink to='/'>
						<span>블로그</span>
					</NavLink>
					<NavLink to='/resume'>
						<span>이력서</span>
					</NavLink>
					<NavLink to='/portfolio'>
						<span>포트폴리오</span>
					</NavLink>
					{/* Resume page menu END*/}
					<ShowOnWebContainer>
						{/* Dark / light mode toggle */}
						<DarkLightMode />
						{/* Dark / light mode toggle END */}
						{/* Github icon */}
						<GithubButton />
						{/* Github icon END */}
					</ShowOnWebContainer>
				</LinkContainer>
				<ShowOnMobileContainer>
					{/* Dark / light mode toggle */}
					<DarkLightMode />
					{/* Dark / light mode toggle END */}
					{/* Github icon */}
					<GithubButton />
					{/* Github icon END */}
					<HamburgerMenu className={isActive ? 'isActive' : ''} onClick={toggleHamburgerMenu}>
						<span></span>
						<span></span>
						<span></span>
					</HamburgerMenu>
				</ShowOnMobileContainer>
				<MobileNav className={isActive ? 'isActive' : ''}>
					<NavLink to='/'>블로그</NavLink>
					<NavLink to='/resume'>이력서</NavLink>
					<NavLink to='/portfolio'>포트폴리오</NavLink>
				</MobileNav>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
