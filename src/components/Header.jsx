import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DarkLightMode from '../features/darkMode/DarkLightMode'
import GithubButton from './GithubButton'
import LoginLogoutButton from './LoginLogoutButton'
import Logo from './Logo'
import MainLinks from './MainLinks'
import {
	HamburgerMenu,
	MobileNav,
	Nav,
	ShowOnMobileContainer,
	StyledHeader,
} from './styles/Header.styled.js'

const Header = props => {
	const { user, handleLogout } = props
	const userId = user?.uid
	const [isActive, setActive] = useState(false)

	const toggleHamburgerMenu = () => {
		setActive(!isActive)
	}

	return (
		<StyledHeader>
			<Nav>
				<Logo />
				<LoginLogoutButton userId={userId} handleLogout={handleLogout} />
				<MainLinks />
				<ShowOnMobileContainer>
					<DarkLightMode />
					<GithubButton />
					<HamburgerMenu
						title='Hamburger menu'
						className={isActive ? 'isActive' : ''}
						onClick={toggleHamburgerMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</HamburgerMenu>
				</ShowOnMobileContainer>
				<MobileNav className={isActive ? 'isActive' : ''}>
					<NavLink to='/' onClick={toggleHamburgerMenu}>
						블로그
					</NavLink>
					<NavLink to='/resume' onClick={toggleHamburgerMenu}>
						이력서
					</NavLink>
					<NavLink to='/portfolio' onClick={toggleHamburgerMenu}>
						포트폴리오
					</NavLink>
				</MobileNav>
			</Nav>
		</StyledHeader>
	)
}

export default Header
