import { nanoid } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import darkScreenShot from '../assets/img/sexybrain-main-page-dark.jpg'
import GithubButtonForPortfolio from '../components/GithubButtonForPortfolio'
import useTitle from '../components/hook/useTitle'
import LinkButton from '../components/LinkButton.jsx'
import ProjectStacks from '../components/ProjectStacks'
import { H2 } from '../components/styles/General.styled'
import {
	Content,
	ContentContainer,
	Description,
	PortFolioContainer,
	ProjectContainer,
	ProjectContent,
	ProjectImage,
	ProjectLink,
	ProjectStack,
} from '../components/styles/Portfolio.styled.js'
import Projects from '../projects/projects.json'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
	const { t } = useTranslation('global') // Initialize the i18next translation hook

	useTitle('Portfolio')
	const [projects, setProjects] = useState(Projects)
	const [categories, setCategories] = useState()
	const [loading, setLoading] = useState(true)
	const [isActive, setActive] = useState(1)
	const isPressed = useSelector(state => state.resetButton.buttonPressed)
	const [selectedCategory, setSelectedCategory] = useState(null)

	useEffect(() => {
		const categories = () => {
			let array = []
			projects.forEach(project => {
				array.push(...project.stack)
			})
			const uniqueCategories = [...new Set(array.map(stack => stack))]
			setCategories(uniqueCategories)
			setLoading(false)
		}

		categories()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projects])

	// Show posts that are only related to the clicked category when clicked
	const handleSelectedCategory = selectedCategory => {
		const filtered = projects.filter(project =>
			project.stack.includes(selectedCategory)
		)
		return () => {
			setProjects(filtered)
			setSelectedCategory(selectedCategory)
			// toast.info(
			// 	`카테고리는 자동으로 채워집니다. ${selectedCategory} 카테고리를 선택 하였지만 아직 포트폴리오에 올라온 프로젝트가 하나이기 때문에 필터링 되는게 않보일 것입니다.`
			// );
		}
	}

	return (
		<PortFolioContainer>
			{/* Left sidebar filter section start */}
			{/* <FilterContainer>
				<>Filter by category:</>
				{categories &&
					categories.length > 2 &&
					categories.map(category => {
						return (
							<CategoryFilter
								key={nanoid()}
								onClick={handleSelectedCategory(category)}
								className={isPressed ? 'pressed' : ''}
							>
								<span>{category}</span>
							</CategoryFilter>
						);
					})}
			</FilterContainer> */}
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
						projects.map(project => (
							<Content
								className={isActive === 1 ? 'isActive' : ''}
								key={nanoid()}
							>
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
										<p>{t('portfolio.description')}</p>
									</Description>

									<ProjectStack>
										<ProjectStacks project={project} />
									</ProjectStack>

									<ProjectLink>
										{project && project.githubRepo ? (
											<GithubButtonForPortfolio
												link='https://github.com/hiredtocode/sexybrain'
												title='sexybrain github'
											/>
										) : null}
										{project && project.hyperlink ? (
											<LinkButton
												link='https://sexybrain.dev'
												title='sexybrain website'
											/>
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
	)
}
export default Portfolio
