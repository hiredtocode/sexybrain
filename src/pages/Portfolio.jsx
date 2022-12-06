import Flex from '../components/styles/Flex.styled.js';
import { ProjectContainer } from '../components/styles/portfolio/ProjectContainer.styled.js';
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
import styledComponents from '../assets/img/styledComponentsLogo.svg';
import firebase from '../assets/img/firebase-icon.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import programmer from '../assets/img/programmer.svg';
import php from '../assets/img/php.svg';
import { v4 as uuidv4 } from 'uuid';
import question from '../assets/img/question.svg';
import { H3 } from '../components/styles/Title.styled';
import Projects from '../projects/projects.json';
import GithubButtonForPortfolio from '../components/GithubButtonForPortfolio';

import {
	ProjectCard,
	CardContainer,
	ProjectDescription,
	Stack,
	StackButton,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import visualStudioCode from '../assets/img/visualStudioCode.svg';
import CategoryList from '../components/CategoryList';

const Portfolio = () => {
	return (
		<main style={{ width: '100%' }}>
			<Flex direction='row' justify='center' alignItems='center' style={{ width: '100%' }}>
				<CategoryList />
				<ProjectContainer>
					{Projects &&
						Projects.map((project) => (
							<CardContainer key={uuidv4()}>
								<ProjectCard>
									<Flex>
										<img className='image' src={project.image} alt={project.title} />
										<Flex direction='column' grow='1'>
											<Flex direction='column' style={{ Width: '100%' }}>
												<H3>
													{project.title} |{' '}
													<GithubButtonForPortfolio
														link={'https://github.com/hiredtocode/sexybrain'}
													/>
												</H3>
												<span className='subText'> {project.date} </span>
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
																<span>{stack}</span>
																<img src={javascript} alt={stack} />
															</StackButton>
														);
													case 'TypeScript':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={typescript} alt={stack} />
															</StackButton>
														);
													case 'React':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={react} alt={stack} />
															</StackButton>
														);
													case 'Angular':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={angular} alt={stack} />
															</StackButton>
														);
													case 'CSS':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={css} alt={stack} />
															</StackButton>
														);
													case 'HTML':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={html} alt={stack} />
															</StackButton>
														);
													case 'SASS':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={sass} alt={stack} />
															</StackButton>
														);
													case 'Bootstrap':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={bootstrap} alt={stack} />
															</StackButton>
														);
													case 'Material UI':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={materialUi} alt={stack} />
															</StackButton>
														);
													case 'Tailwind CSS':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={tailwindcss} alt={stack} />
															</StackButton>
														);
													case 'Styled Components':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={styledComponents} alt={stack} />
															</StackButton>
														);
													case 'What I learned':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={programmer} alt={stack} />
															</StackButton>
														);
													case 'Firebase':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={firebase} alt={stack} />
															</StackButton>
														);
													case 'Wordpress':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={wordpress} alt={stack} />
															</StackButton>
														);
													case 'PHP':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={php} alt={stack} />
															</StackButton>
														);
													case 'VSCode':
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
																<img src={visualStudioCode} alt={stack} />
															</StackButton>
														);
													default:
														return (
															<StackButton key={uuidv4()}>
																<span>{stack}</span>
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
				</ProjectContainer>
			</Flex>
		</main>
	);
};
export default Portfolio;
