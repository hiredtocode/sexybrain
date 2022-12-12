import Flex from '../components/styles/Flex.styled.js';

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
	CategoryFilter,
	ContentContainer,
	Content,
	PortFolioContainer,
	ProjectContainer,
	FilterContainer,
	Tab,
	Tabs,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import visualStudioCode from '../assets/img/visualStudioCode.svg';
import LinkButton from '../components/LinkButton.jsx';
import { useState, useEffect } from 'react';

const Portfolio = () => {
	const [projects, setProjects] = useState(Projects);
	const [categories, setCategories] = useState();
	const [loading, setLoading] = useState(true);
	const [isActive, setActive] = useState(1);
	const [isPressed, setPressed] = useState(false);

	useEffect(() => {
		const categories = () => {
			let array = [];
			projects.forEach((project) => {
				array.push(...project.stack);
			});
			const uniqueCategories = [...new Set(array.map((stack) => stack))];
			setCategories(uniqueCategories);
			setLoading(false);
		};

		categories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projects]);

	console.log('isPressed:', isPressed);

	const onReset = () => {
		setProjects(Projects);
		setPressed(false);
	};
	// Show posts that are only related to the clicked category when clicked
	const handleCategory = (selectedCategory) => {
		const filtered = projects.filter((project) => project.stack.includes(selectedCategory));
		return () => {
			setProjects(filtered);
			setPressed(true);
		};
	};
	// Show posts that are only related to the clicked category when clicked END
	const toggleActive = (index) => {
		setActive(index);
	};
	return (
		<PortFolioContainer>
			{/* Left sidebar filter section start */}
			<FilterContainer>
				<ul>
					<div>Filter by category:</div>
					<li className={isPressed ? 'pressed' : ''} onClick={onReset}>
						All / Reset
					</li>
					{categories &&
						categories.length > 6 &&
						categories.map((category) => {
							return (
								<CategoryFilter
									key={uuidv4()}
									onClick={handleCategory(category)}
									className={isPressed ? 'pressed' : ''}
								>
									{category}
								</CategoryFilter>
							);
						})}
				</ul>
			</FilterContainer>
			{/* Left sidebar filter section start END*/}
			<ProjectContainer>
				<Tabs>
					<Tab className={isActive === 1 ? 'active' : ''} onClick={() => toggleActive(1)}>
						Project 1
					</Tab>
					<Tab className={isActive === 2 ? 'active' : ''} onClick={() => toggleActive(2)}>
						Project 2
					</Tab>
					<Tab className={isActive === 3 ? 'active' : ''} onClick={() => toggleActive(3)}>
						Project 3
					</Tab>
				</Tabs>

				<ContentContainer>
					<Content className={isActive === 1 ? 'active' : ''}>
						<h2>Content 1</h2>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium
							incidunt quia aspernatur quasi quidem facilis quo nihil vel voluptatum?
						</p>
					</Content>

					<Content className={isActive === 2 ? 'active' : ''}>
						<h2>Content 2</h2>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui
							adipisci.
						</p>
					</Content>

					<Content className={isActive === 3 ? 'active' : ''}>
						<h2>Content 3</h2>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed nostrum rerum
							laudantium totam unde adipisci incidunt modi alias! Accusamus in quia odit aspernatur
							provident et ad vel distinctio recusandae totam quidem repudiandae omnis veritatis
							nostrum laboriosam architecto optio rem, dignissimos voluptatum beatae aperiam
							voluptatem atque. Beatae rerum dolores sunt.
						</p>
					</Content>
				</ContentContainer>
			</ProjectContainer>

			{/* Project card collection row section start */}
			{/* <ProjectContainer>
				{projects &&
					projects.map((project) => (
						<CardContainer key={uuidv4()}>
							<ProjectCard>
								<Flex direction='column' grow='1'>
									<Flex direction='row' style={{ Width: '100%' }} align='center' justfiy='center'>
										<div>
											<H3>{project.title}</H3>
										</div>
										{project.githubRepo ? (
											<GithubButtonForPortfolio link={project.githubRepo} />
										) : null}
										{project.hyperlink ? (
											<LinkButton link={project.hyperlink} title={project.title} />
										) : null}
									</Flex>
									<span className='subText'> {project.date} </span>

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
							</ProjectCard>
						</CardContainer>
					))}
			</ProjectContainer> */}
			{/* Project card collection row section END */}
		</PortFolioContainer>
	);
};
export default Portfolio;
