import BlogButton from './BlogButton'
import PortfolioButton from './PortfolioButton'
import ResumeButton from './ResumeButton'
import { LinkContainer } from './styles/Header.styled'

const MainLinks = () => {
	return (
		<LinkContainer>
			<BlogButton />
			<ResumeButton />
			<PortfolioButton />
		</LinkContainer>
	)
}

export default MainLinks
