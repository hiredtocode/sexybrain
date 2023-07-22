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
				<LoginLogoutButton userId={userId} handleLogout={handleLogout} />
				<MainLinks />
				<ShowOnMobileContainer>
					<LangButton />
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
						{t('menu.blog')}
					</NavLink>
					<NavLink to='/resume' onClick={toggleHamburgerMenu}>
						{t('menu.resume')}
					</NavLink>
					<NavLink to='/portfolio' onClick={toggleHamburgerMenu}>
						{t('menu.portfolio')}
					</NavLink>
				</MobileNav>
			</Nav>
		</StyledHeader>
	)
}

export default Header
