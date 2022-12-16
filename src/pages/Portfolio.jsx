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
import { H2 } from '../components/styles/Title.styled';
import Projects from '../projects/projects.json';
import GithubButtonForPortfolio from '../components/GithubButtonForPortfolio';
import {
	StackButton,
	CategoryFilter,
	ContentContainer,
	Content,
	PortFolioContainer,
	ProjectContainer,
	FilterContainer,
	ProjectContent,
	ProjectImage,
	Description,
	ProjectLink,
	ProjectStack,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import visualStudioCode from '../assets/img/visualStudioCode.svg';
import LinkButton from '../components/LinkButton.jsx';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import darkScreenShot from '../assets/img/sexybrain-main-page-dark.jpg';
import { toast } from 'react-toastify';
import ResetButton from '../components/ResetButton.jsx';

const Portfolio = (props) => {
	const { resetClickHandler } = props;
	const { isPressed } = useContext(ThemeContext);

	const [projects, setProjects] = useState(Projects);
	const [categories, setCategories] = useState();
	const [loading, setLoading] = useState(true);
	const [isActive, setActive] = useState(1);

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

	// Show posts that are only related to the clicked category when clicked
	const handleCategory = (selectedCategory) => {
		const filtered = projects.filter((project) => project.stack.includes(selectedCategory));
		return () => {
			setProjects(filtered);

			toast.info(
				`카테고리는 자동으로 채워집니다. ${selectedCategory} 카테고리를 선택 하였지만 아직 포트폴리오에 올라온 프로젝트가 하나이기 때문에 필터링 되는게 않보일 것입니다.`
			);
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
				<div>Filter by category:</div>
				<ResetButton onClick={resetClickHandler} />
				{categories &&
					categories.length > 2 &&
					categories.map((category) => {
						return (
							<CategoryFilter
								key={uuidv4()}
								onClick={handleCategory(category)}
								className={isPressed ? 'pressed' : ''}
							>
								<span>{category}</span>
							</CategoryFilter>
						);
					})}
			</FilterContainer>
			{/* Left sidebar filter section start END*/}
			<ProjectContainer>
				{/* <Tabs>
					<Tab className={isActive === 1 ? 'active' : ''} onClick={() => toggleActive(1)}>
						SexyBrain.Dev
					</Tab>
					<Tab className={isActive === 2 ? 'active' : ''} onClick={() => toggleActive(2)}>
						Project 2
					</Tab>
				</Tabs> */}
				<ContentContainer>
					{projects &&
						projects.map((project) => (
							<Content className={isActive === 1 ? 'isActive' : ''} key={uuidv4()}>
								<ProjectContent>
									<p className='featured'>
										<mark>Featured Project</mark>
									</p>
									<H2>
										<mark>
											<a href='http://sexybrain.dev'>Sexy Brain Developer</a>
										</mark>
									</H2>
									<Description>
										This is a website I am currently working on which is also my featured project
										since it's built from ground and up by me to be able to learn the React
										framework and also Javascript.
									</Description>

									<ProjectStack>
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
									</ProjectStack>
									<ProjectLink>
										{project && project.githubRepo ? (
											<GithubButtonForPortfolio link='https://github.com/hiredtocode/sexybrain' />
										) : null}
										{project && project.hyperlink ? (
											<LinkButton link='https://sexybrain.dev' title='sexybrain website' />
										) : null}
									</ProjectLink>
								</ProjectContent>
								<ProjectImage>
									<a
										href='https://sexybrain.dev'
										rel='author noreferrer'
										target='_blank'
										aria-label='sexybrain main page'
									>
										<img src={darkScreenShot} alt='' className='image' />
									</a>
								</ProjectImage>
							</Content>
						))}
					<Content className={isActive === 2 ? 'active' : ''}></Content>
				</ContentContainer>
			</ProjectContainer>
		</PortFolioContainer>
	);
};
export default Portfolio;
