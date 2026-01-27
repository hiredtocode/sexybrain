import GithubBlack from '../assets/img/github-black.svg'
import GithubWhite from '../assets/img/github-white.svg'
import Github from '../assets/img/github.svg'
import {
	GithubBottom,
	GithubIconContainer,
	GithubTop,
} from './styles/Header.styled'

const GithubButton = ({ mode }) => {
	return (
		<GithubIconContainer
			href='https://github.com/hiredtocode'
			target='_blank'
			rel='noreferrer'
			aria-label='Visit GitHub profile'
		>
			<GithubTop
				src={mode === 'dark' ? Github : GithubWhite}
				alt='Github top Icon'
				aria-label='Click to go to my github page'
			/>
			<GithubBottom
				src={mode === 'dark' ? GithubWhite : GithubBlack}
				alt='Github bottom icon'
				aria-label='Click to go to my github page'
			/>
		</GithubIconContainer>
	)
}

export default GithubButton
