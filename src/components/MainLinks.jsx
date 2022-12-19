import DarkLightMode from '../features/darkMode/DarkLightMode'
import BlogButton from './BlogButton'
import GithubButton from './GithubButton'
import PortfolioButton from './PortfolioButton'
import ResumeButton from './ResumeButton'
import { LinkContainer, ShowOnWebContainer } from './styles/Header.styled'

const MainLinks = () => {
	return (
		<LinkContainer>
			<BlogButton />
			<ResumeButton />
			<PortfolioButton />
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
	)
}

export default MainLinks
