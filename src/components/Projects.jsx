import React from 'react';
import {
	ProjectCard,
	CardContainer,
	ProjectDescription,
	Stack,
	StackButton,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import { H3 } from '../components/styles/Title.styled';
import Projects from '../projects/projects.json';
import Flex from '../components/styles/Flex.styled.js';
import { v4 as uuidv4 } from 'uuid';
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
import php from '../assets/img/php.svg';
import question from '../assets/img/question.svg';
import visualStudioCode from '../assets/img/visualStudioCode.svg';

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
									<Flex>
										<H3>{project.title}</H3>
									</Flex>

									<ProjectDescription>
										<p>{project.description}</p>
									</ProjectDescription>
								</Flex>
								<Stack>
									{project.stack.map((stack) => {
										switch (stack) {
											case 'JavaScript':
												return (
													<StackButton key={uuidv4()}>
														<img src={javascript} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'TypeScript':
												return (
													<StackButton key={uuidv4()}>
														<img src={typescript} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'React':
												return (
													<StackButton key={uuidv4()}>
														<img src={react} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'Angular':
												return (
													<StackButton key={uuidv4()}>
														<img src={angular} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'CSS':
												return (
													<StackButton key={uuidv4()}>
														<img src={css} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'HTML':
												return (
													<StackButton key={uuidv4()}>
														<img src={html} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'SASS':
												return (
													<StackButton key={uuidv4()}>
														<img src={sass} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'Bootstrap':
												return (
													<StackButton key={uuidv4()}>
														<img src={bootstrap} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'Material UI':
												return (
													<StackButton key={uuidv4()}>
														<img src={materialUi} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'Tailwind CSS':
												return (
													<StackButton key={uuidv4()}>
														<img src={tailwindcss} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'Styled Components':
												return (
													<StackButton key={uuidv4()}>
														<img src={styledComponents} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'What I learned':
												return (
													<StackButton key={uuidv4()}>
														<img src={programmer} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'Firebase':
												return (
													<StackButton key={uuidv4()}>
														<img src={firebase} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'Wordpress':
												return (
													<StackButton key={uuidv4()}>
														<img src={wordpress} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'PHP':
												return (
													<StackButton key={uuidv4()}>
														<img src={php} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											case 'VSCode':
												return (
													<StackButton key={uuidv4()}>
														<img src={visualStudioCode} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
											default:
												return (
													<StackButton key={uuidv4()}>
														<img src={question} alt={stack} />
														<span>{stack}</span>
													</StackButton>
												);
										}
									})}
								</Stack>
							</Flex>
						</ProjectCard>
					</CardContainer>
				))}
		</>
	);
};
export default Project;
