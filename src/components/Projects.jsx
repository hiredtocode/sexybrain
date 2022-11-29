import React from 'react';
import {
	ProjectCard,
	CardContainer,
	ProjectDescription,
	Stack,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import { H3 } from '../components/styles/Title.styled';
import Projects from '../projects/projects.json';
import Flex from '../components/styles/Flex.styled.js';
import { v4 as uuidv4 } from 'uuid';
import CategoryButton from '../components/styles/CategoryButton.styled.js';
import javascript from '../assets/img/javascript.svg';
import angular from '../assets/img/angular.svg';
import html from '../assets/img/html.svg';
import typescript from '../assets/img/typescript.svg';
import react from '../assets/img/react.svg';
import css from '../assets/img/css3.svg';
import sass from '../assets/img/sass.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import materialUi from '../assets/img/material-ui.svg';
import wordpress from '../assets/img/wordpress.svg';
import styledComponents from '../assets/img/styled-components.svg';
import firebase from '../assets/img/firebase-icon.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';

const Project = () => {
	return (
		<>
			{Projects &&
				Projects.map((project) => (
					<CardContainer key={project.id}>
						<ProjectCard>
							<Flex>
								<img className='image' src={project.image} alt={project.title} />
								<Flex direction='column'>
									<H3>{project.title}</H3>
									<ProjectDescription>
										<p>{project.description}</p>
										<Stack>
											{project.stack.map((stack) => {
												switch (stack) {
													case 'JavaScript':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={javascript} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'TypeScript':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={typescript} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'React':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={react} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'Angular':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={angular} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'CSS':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={css} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'HTML':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={html} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'SASS':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={sass} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'Bootstrap':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={bootstrap} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'Material UI':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={materialUi} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'Tailwind CSS':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={tailwindcss} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'Styled Components':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={styledComponents} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'What I learned':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={programmer} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'Firebase':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={firebase} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													case 'Wordpress':
														return (
															<CategoryButton key={uuidv4()}>
																<img src={wordpress} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
													default:
														return (
															<CategoryButton key={uuidv4()}>
																<img src={question} alt={stack} />
																<span>{stack}</span>
															</CategoryButton>
														);
												}
											})}
										</Stack>
									</ProjectDescription>
								</Flex>
							</Flex>
						</ProjectCard>
					</CardContainer>
				))}
		</>
	);
};
export default Project;
