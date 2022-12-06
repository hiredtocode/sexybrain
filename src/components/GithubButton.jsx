import { useContext } from 'react';
import { GithubBottom, GithubIconContainer, GithubTop } from './styles/Github.styled';
import { ThemeContext } from '../App';
import Github from '../assets/img/github.svg';
import GithubBlack from '../assets/img/github-black.svg';
import GithubWhite from '../assets/img/github-white.svg';

const GithubButton = () => {
	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<GithubIconContainer
			//TODO Make this a component and reuse it in portfolio
			href='https://github.com/hiredtocode'
			target='_blank'
			rel='noreferrer'
		>
			{isDark ? (
				<>
					<GithubTop
						src={Github}
						alt='Github Icon'
						aria-label='Click to go to my github page'
						style={{ outlineWidth: '1px', outlineStyle: 'groove', outlineColor: 'black' }}
					/>
					<GithubBottom
						src={GithubWhite}
						alt='Github bottom icon'
						aria-label='Click to go to my github page'
						style={{ outlineWidth: '1px', outlineStyle: 'groove', outlineColor: 'black' }}
					/>
				</>
			) : (
				<>
					<GithubTop
						src={GithubWhite}
						alt='Github top icon'
						aria-label='Click to go to my github page'
					/>
					<GithubBottom
						src={GithubBlack}
						alt='Github bottom icon'
						aria-label='Click to go to my github page'
					/>
				</>
			)}
		</GithubIconContainer>
	);
};

export default GithubButton;
