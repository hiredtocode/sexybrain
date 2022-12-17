import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
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
import darkScreenShot from '../assets/img/sexybrain-main-page-dark.jpg';
import styledComponents from '../assets/img/styledComponentsLogo.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import typescript from '../assets/img/typescript.svg';
import visualStudioCode from '../assets/img/visualStudioCode.svg';
import wordpress from '../assets/img/wordpress.svg';
import GithubButtonForPortfolio from '../components/GithubButtonForPortfolio';
import LinkButton from '../components/LinkButton.jsx';
import {
	CategoryFilter,
	Content,
	ContentContainer,
	Description,
	FilterContainer,
	PortFolioContainer,
	ProjectContainer,
	ProjectContent,
	ProjectImage,
	ProjectLink,
	ProjectStack,
	StackButton,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import { Highlight } from '../components/styles/resume/Highlight.styled.js';
import { H2 } from '../components/styles/Title.styled';
import Projects from '../projects/projects.json';

const Portfolio = () => {
	const [projects, setProjects] = useState(Projects);
	const [categories, setCategories] = useState();
	const [loading, setLoading] = useState(true);
	const [isActive, setActive] = useState(1);
	const isPressed = useSelector((state) => state.resetButton.buttonPressed);
	const [selectedCategory, setSelectedCategory] = useState(null);

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
	const handleSelectedCategory = (selectedCategory) => {
		const filtered = projects.filter((project) => project.stack.includes(selectedCategory));
		return () => {
			setProjects(filtered);
			setSelectedCategory(selectedCategory);
			toast.info(
				`카테고리는 자동으로 채워집니다. ${selectedCategory} 카테고리를 선택 하였지만 아직 포트폴리오에 올라온 프로젝트가 하나이기 때문에 필터링 되는게 않보일 것입니다.`
			);
		};
	};
	// Show posts that are only related to the clicked category when clicked END
	const toggleActive = (index) => {
		setActive(index);
	};
	const handleClose = () => {
		setProjects(Projects);
	};
	return (
		<PortFolioContainer>
			{/* Left sidebar filter section start */}
			<FilterContainer>
				<div>Filter by category:</div>
				{categories &&
					categories.length > 2 &&
					categories.map((category) => {
						return (
							<CategoryFilter
								key={uuidv4()}
								onClick={handleSelectedCategory(category)}
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
										프론트앤드는 <Highlight> React + Styled Components</Highlight>로 만들고 백앤드는
										<Highlight>Firebase로 로그인</Highlight> 처리와 블로그 포스팅을 할 수 있게
										만들었고 <Highlight>Redux를 통해 상태 관리</Highlight>를 하고 있습니다.
										<br /> 이미 만들어진 플랫폼이나 템플릿 혹은{' '}
										<Highlight>Bootstrap / Material UI</Highlight>를 사용하여 쉽게 디자인을 할 수
										있었지만 <Highlight>완전한 제어와 학습을 위해</Highlight> 일부러 처음부터 끝까지
										디자인과 제작을 하고 있습니다.
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
