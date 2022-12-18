import { nanoid } from '@reduxjs/toolkit';
import angular from '../assets/img/angular.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import css from '../assets/img/css3.svg';
import firebase from '../assets/img/firebase-icon.svg';
import html from '../assets/img/html.svg';
import javascript from '../assets/img/javascript.svg';
import materialUi from '../assets/img/material-ui.svg';
import php from '../assets/img/php.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';
import react from '../assets/img/react.svg';
import sass from '../assets/img/sass.svg';
import styledComponents from '../assets/img/styledComponentsLogo.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import typescript from '../assets/img/typescript.svg';
import visualStudioCode from '../assets/img/visualStudioCode.svg';
import wordpress from '../assets/img/wordpress.svg';
import { StackButton } from './styles/portfolio/ProjectContainer.styled';

const ProjectStacks = props => {
	const { project } = props;
	return (
		<>
			{project.stack.map(stack => {
				switch (stack) {
					case 'JavaScript':
						return (
							<StackButton key={nanoid()}>
								<img src={javascript} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'TypeScript':
						return (
							<StackButton key={nanoid()}>
								<img src={typescript} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'React':
						return (
							<StackButton key={nanoid()}>
								<img src={react} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'Angular':
						return (
							<StackButton key={nanoid()}>
								<img src={angular} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'CSS':
						return (
							<StackButton key={nanoid()}>
								<img src={css} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'HTML':
						return (
							<StackButton key={nanoid()}>
								<img src={html} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'SASS':
						return (
							<StackButton key={nanoid()}>
								<img src={sass} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'Bootstrap':
						return (
							<StackButton key={nanoid()}>
								<img src={bootstrap} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'Material UI':
						return (
							<StackButton key={nanoid()}>
								<img src={materialUi} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'Tailwind CSS':
						return (
							<StackButton key={nanoid()}>
								<img src={tailwindcss} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'Styled Components':
						return (
							<StackButton key={nanoid()}>
								<img src={styledComponents} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'What I learned':
						return (
							<StackButton key={nanoid()}>
								<img src={programmer} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'Firebase':
						return (
							<StackButton key={nanoid()}>
								<img src={firebase} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'Wordpress':
						return (
							<StackButton key={nanoid()}>
								<img src={wordpress} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'PHP':
						return (
							<StackButton key={nanoid()}>
								<img src={php} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					case 'VSCode':
						return (
							<StackButton key={nanoid()}>
								<img src={visualStudioCode} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
					default:
						return (
							<StackButton key={nanoid()}>
								<img src={question} alt={stack} />
								<span>{stack}</span>
							</StackButton>
						);
				}
			})}
		</>
	);
};

export default ProjectStacks;
