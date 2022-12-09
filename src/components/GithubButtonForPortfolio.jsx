import { useContext } from 'react';
import {
	GithubBottom,
	GithubIconContainer,
	GithubTop,
} from './styles/portfolio/ProjectContainer.styled.js';
import { ThemeContext } from '../App';
import Github from '../assets/img/github.svg';
import GithubBlack from '../assets/img/github-black.svg';
import GithubWhite from '../assets/img/github-white.svg';

const GithubButtonForPortfolio = (props) => {
	const { link } = props;
	const { isDark } = useContext(ThemeContext);

	return (
		<div>
			<GithubIconContainer
				//TODO Make this a component and reuse it in portfolio
				href={link}
				target='_blank'
				rel='noreferrer'
			>
				<GithubTop
					src={isDark ? Github : GithubWhite}
					alt='Github top Icon'
					aria-label='Click to go to my github page'
				/>
				<GithubBottom
					src={isDark ? GithubWhite : GithubBlack}
					alt='Github bottom icon'
					aria-label='Click to go to my github page'
				/>
			</GithubIconContainer>
		</div>
	);
};

export default GithubButtonForPortfolio;
