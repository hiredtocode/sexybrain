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
									<Flex>
										<H3>{project.title}</H3>
									</Flex>

									<ProjectDescription>
										<p>{project.description}</p>
									</ProjectDescription>
								</Flex>
								<Stack>
									<p>스택:</p>
									{project.stack.map((stack) => {
										switch (stack) {
											case 'JavaScript':
												return (
													<StackButton key={uuidv4()}>
														<img src={javascript} alt={stack} />
													</StackButton>
												);
											case 'TypeScript':
												return (
													<StackButton key={uuidv4()}>
														<img src={typescript} alt={stack} />
													</StackButton>
												);
											case 'React':
												return (
													<StackButton key={uuidv4()}>
														<img src={react} alt={stack} />
													</StackButton>
												);
											case 'Angular':
												return (
													<StackButton key={uuidv4()}>
														<img src={angular} alt={stack} />
													</StackButton>
												);
											case 'CSS':
												return (
													<StackButton key={uuidv4()}>
														<img src={css} alt={stack} />
													</StackButton>
												);
											case 'HTML':
												return (
													<StackButton key={uuidv4()}>
														<img src={html} alt={stack} />
													</StackButton>
												);
											case 'SASS':
												return (
													<StackButton key={uuidv4()}>
														<img src={sass} alt={stack} />
													</StackButton>
												);
											case 'Bootstrap':
												return (
													<StackButton key={uuidv4()}>
														<img src={bootstrap} alt={stack} />
													</StackButton>
												);
											case 'Material UI':
												return (
													<StackButton key={uuidv4()}>
														<img src={materialUi} alt={stack} />
													</StackButton>
												);
											case 'Tailwind CSS':
												return (
													<StackButton key={uuidv4()}>
														<img src={tailwindcss} alt={stack} />
													</StackButton>
												);
											case 'Styled Components':
												return (
													<StackButton key={uuidv4()}>
														<img src={styledComponents} alt={stack} />
													</StackButton>
												);
											case 'What I learned':
												return (
													<StackButton key={uuidv4()}>
														<img src={programmer} alt={stack} />
													</StackButton>
												);
											case 'Firebase':
												return (
													<StackButton key={uuidv4()}>
														<img src={firebase} alt={stack} />
													</StackButton>
												);
											case 'Wordpress':
												return (
													<StackButton key={uuidv4()}>
														<img src={wordpress} alt={stack} />
													</StackButton>
												);
											default:
												return (
													<StackButton key={uuidv4()}>
														<img src={question} alt={stack} />
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
