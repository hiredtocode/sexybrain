import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DarkLightMode from '../features/darkMode/DarkLightMode'
import GithubButton from './GithubButton'
import LoginLogoutButton from './LoginLogoutButton'
import Logo from './Logo'
import MainLinks from './MainLinks'
import {
	DesktopLoginContainer,
	HamburgerMenu,
	MobileLoginContainer,
	MobileNav,
	Nav,
	RightContainer,
	StyledHeader,
} from './styles/Header.styled.js'
import { useTranslation } from 'react-i18next'
import LangButton from '../features/changeLanguage/ToggleLanguage.js'

const Header = props => {
	const { user, handleLogout } = props
	const userId = user?.uid
	const [isActive, setActive] = useState(false)

	const { t } = useTranslation('global') // Initialize the i18next translation hook

	const toggleHamburgerMenu = () => {
		setActive(!isActive)
	}

	return (
		<StyledHeader>
			<Nav>
				<Logo />
				<MainLinks />
				<RightContainer>
					<LangButton />
					<DarkLightMode />
					<GithubButton />
					<DesktopLoginContainer>
						<LoginLogoutButton userId={userId} handleLogout={handleLogout} />
					</DesktopLoginContainer>
					<HamburgerMenu
						title='Hamburger menu'
						className={isActive ? 'isActive' : ''}
						onClick={toggleHamburgerMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</HamburgerMenu>
				</RightContainer>
				<MobileNav className={isActive ? 'isActive' : ''}>
					<NavLink to='/' onClick={toggleHamburgerMenu}>
						{t('menu.blog')}
					</NavLink>
					<NavLink to='/resume' onClick={toggleHamburgerMenu}>
						{t('menu.resume')}
					</NavLink>
					<NavLink to='/portfolio' onClick={toggleHamburgerMenu}>
						{t('menu.portfolio')}
					</NavLink>
					<MobileLoginContainer onClick={toggleHamburgerMenu}>
						<LoginLogoutButton userId={userId} handleLogout={handleLogout} />
					</MobileLoginContainer>
				</MobileNav>
			</Nav>
		</StyledHeader>
	)
}

export default Header
