import DarkLightMode from '../features/darkMode/DarkLightMode'
import BlogButton from './BlogButton'
import GithubButton from './GithubButton'
import LangButton from '../features/changeLanguage/ToggleLanguage.js'
import PortfolioButton from './PortfolioButton'
import ResumeButton from './ResumeButton'
import { LinkContainer, ShowOnWebContainer } from './styles/Header.styled'

const MainLinks = () => {
	return (
		<LinkContainer>
			<BlogButton />
			<ResumeButton />
			<PortfolioButton />
			<ShowOnWebContainer>
				<LangButton />
				<DarkLightMode />
				<GithubButton />
			</ShowOnWebContainer>
		</LinkContainer>
	)
}

export default MainLinks
