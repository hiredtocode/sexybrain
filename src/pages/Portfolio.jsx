import { useState } from 'react'
import { useSelector } from 'react-redux'

import GithubButtonForPortfolio from '../components/GithubButtonForPortfolio'
import useTitle from '../components/hook/useTitle'
import LinkButton from '../components/LinkButton.jsx'
import { Flex, H3 } from '../components/styles/General.styled'
import {
	PortFolioContainer,
	ProjectContainer,
	ContentContainer,
	ProjectLink,
	Tabs,
	Tab,
	TabContent,
	ProjectButton,
	ProjectDetails,
} from '../components/styles/Portfolio.styled.js'
import {
	Badge,
	Section,
	Stack,
	StackBadges,
} from '../components/styles/Resume.styled.js'
import { useTranslation } from 'react-i18next'

// Import icons
import firebase from '../assets/img/firebase-icon.svg'
import javascript from '../assets/img/javascript.svg'
import nextjsWhite from '../assets/img/nextjs-white.svg'
import nextjs from '../assets/img/nextjs.svg'
import postgresql from '../assets/img/postgresql.svg'
import react from '../assets/img/react.svg'
import redux from '../assets/img/redux.svg'
import styledComponents from '../assets/img/styledComponentsLogo.svg'
import supabase from '../assets/img/supabase.svg'
import tailwindcss from '../assets/img/tailwindcss.svg'
import typescript from '../assets/img/typescript.svg'
import rust from '../assets/img/Rust.svg'
import tauri from '../assets/img/Tauri.svg'
import vite from '../assets/img/Vite.js.svg'

const PROJECT_IDS_BY_TAB = {
	fullStack: ['torino', 'sexybrain'],
	electron: ['youtube_copilot'],
}

const Portfolio = () => {
	const { t } = useTranslation('global')
	const mode = useSelector(state => state.darkmode.mode)
	const [activeTab, setActiveTab] = useState('fullStack')
	const [activeProject, setActiveProject] = useState(null)

	useTitle('Portfolio')

	const handleTabClick = tab => {
		setActiveTab(tab)
		const projectIds = PROJECT_IDS_BY_TAB[tab] || []
		if (projectIds.length === 1) {
			setActiveProject(projectIds[0])
		} else {
			setActiveProject(null)
		}
	}

	const handleProjectClick = projectId => {
		setActiveProject(activeProject === projectId ? null : projectId)
	}

	const renderProjectDetails = projectId => {
		if (projectId === 'torino') {
			return (
				<Section>
					<Flex align='center' justify='flex-start' gap='1rem'>
						<H3>{t('project2.subtitle')}</H3>
						<ProjectLink>
							<GithubButtonForPortfolio
								link={t('project2.link')}
								title={t('project2.linkTitle')}
								isPrivate
							/>
							<LinkButton
								link='https://torino-git-develop-jasons-projects-78bd2c92.vercel.app/login'
								title='Torino Live Demo'
							/>
						</ProjectLink>
					</Flex>
					<span className='light'>{t('project2.duration')}</span> <br />
					<p style={{ marginTop: '12px', marginBottom: '16px' }}>
						{t('project2.demoVideoLabel')}{' '}
						<a
							href={t('project2.demoVideoLink')}
							target='_blank'
							rel='noreferrer'
							style={{ fontWeight: 600, textDecoration: 'underline' }}
						>
							{t('project2.demoVideoLinkText')}
						</a>
					</p>
					<ul className='projectBullet'>
						<Stack>
							<span>{t('project2.stack')}</span>
							<StackBadges>
								<Badge>
									<img src={mode === 'dark' ? nextjsWhite : nextjs} alt='Next.js' />
									<p> Next.js </p>
								</Badge>
								<Badge>
									<img src={react} alt='React' />
									<p> React </p>
								</Badge>
								<Badge>
									<img src={typescript} alt='TypeScript' />
									<p> TypeScript </p>
								</Badge>
								<Badge>
									<img src={tailwindcss} alt='Tailwind CSS' />
									<p> Tailwind CSS </p>
								</Badge>
								<Badge>
									<img src={supabase} alt='Supabase' />
									<p> Supabase </p>
								</Badge>
								<Badge>
									<img src={postgresql} alt='PostgreSQL' />
									<p> PostgreSQL </p>
								</Badge>
							</StackBadges>
						</Stack>{' '}
						<ul>
							<li>{t('project2.description.listItem1')}</li>
							<li>{t('project2.description.listItem2')}</li>
							<li>{t('project2.description.listItem3')}</li>
							<li>{t('project2.description.listItem4')}</li>
							<li>
								{t('project2.description.listItem5')}
								<ul>
									<li>{t('project2.description.listSubItem1')}</li>
									<li>{t('project2.description.listSubItem2')}</li>
									<li>{t('project2.description.listSubItem3')}</li>
									<li>{t('project2.description.listSubItem4')}</li>
								</ul>
							</li>
							<li>{t('project2.description.listItem6')}</li>
						</ul>
					</ul>
				</Section>
			)
		} else if (projectId === 'sexybrain') {
			return (
				<Section>
					<Flex align='center' justify='flex-start' gap='1rem'>
						<H3>{t('project1.subtitle')}</H3>
						<ProjectLink>
							<GithubButtonForPortfolio
								link={t('project1.link')}
								title={t('project1.linkTitle')}
							/>
							<LinkButton
								link='https://sexybrain.dev'
								title='sexybrain website'
							/>
						</ProjectLink>
					</Flex>
					<span className='light'>{t('project1.duration')}</span> <br />
					<p style={{ marginTop: '12px', marginBottom: '16px' }}>
						{t('project1.demoVideoLabel')}{' '}
						<a
							href={t('project1.demoVideoLink')}
							target='_blank'
							rel='noreferrer'
							style={{ fontWeight: 600, textDecoration: 'underline' }}
						>
							{t('project1.demoVideoLinkText')}
						</a>
					</p>
					<ul className='projectBullet'>
						<Stack>
							<span>{t('project1.stack')}</span>
							<StackBadges>
								<Badge>
									<img src={react} alt='React' />
									<p> React </p>
								</Badge>
								<Badge>
									<img src={firebase} alt='Firebase' />
									<p> Firebase </p>
								</Badge>
								<Badge>
									<img src={javascript} alt='JavaScript' />
									<p> JavaScript </p>
								</Badge>
								<Badge>
									<img src={styledComponents} alt='Styled Components' />
									<p> Styled Components </p>
								</Badge>
								<Badge>
									<img src={redux} alt='Redux' />
									<p> Redux </p>
								</Badge>
							</StackBadges>
						</Stack>{' '}
						<ul>
							<li>{t('project1.description.listItem1')}</li>
							<li>{t('project1.description.listItem2')}</li>
							<li>{t('project1.description.listItem3')}</li>
							<li>{t('project1.description.listItem4')}</li>
							<li>
								{t('project1.description.listItem5')}
								<ul>
									<li>{t('project1.description.listSubItem1')}</li>
									<li>{t('project1.description.listSubItem2')}</li>
									<li>{t('project1.description.listSubItem3')}</li>
								</ul>
							</li>
							<li>{t('project1.description.listItem6')}</li>
						</ul>
					</ul>
				</Section>
			)
		} else if (projectId === 'youtube_copilot') {
			return (
				<Section>
					<Flex align='center' justify='flex-start' gap='1rem'>
						<H3>{t('project3.subtitle')}</H3>
						<ProjectLink>
							<GithubButtonForPortfolio
								link={t('project3.link')}
								title={t('project3.linkTitle')}
							/>
							<LinkButton
								link={t('project3.releasesLink')}
								title={t('project3.releasesLinkTitle')}
							/>
						</ProjectLink>
					</Flex>
					<span className='light'>{t('project3.duration')}</span> <br />
					<p style={{ marginTop: '12px', marginBottom: '16px' }}>
						{t('project3.demoVideoLabel')}{' '}
						<a
							href={t('project3.demoVideoLink')}
							target='_blank'
							rel='noreferrer'
							style={{ fontWeight: 600, textDecoration: 'underline' }}
						>
							{t('project3.demoVideoLinkText')}
						</a>
					</p>
					<ul className='projectBullet'>
						<Stack>
							<span>{t('project3.stack')}</span>
							<StackBadges>
								<Badge>
									<img src={react} alt='React' />
									<p> React </p>
								</Badge>
								<Badge>
									<img src={typescript} alt='TypeScript' />
									<p> TypeScript </p>
								</Badge>
								<Badge>
									<img src={tailwindcss} alt='Tailwind CSS' />
									<p> Tailwind CSS </p>
								</Badge>
								<Badge>
									<img src={tauri} alt='Tauri' />
									<p> Tauri </p>
								</Badge>
								<Badge>
									<img src={rust} alt='Rust' />
									<p> Rust </p>
								</Badge>
								<Badge>
									<img src={vite} alt='Vite' />
									<p> Vite </p>
								</Badge>
							</StackBadges>
						</Stack>{' '}
						<ul>
							<li>{t('project3.description.listItem1')}</li>
							<li>{t('project3.description.listItem2')}</li>
							<li>{t('project3.description.listItem3')}</li>
							<li>{t('project3.description.listItem4')}</li>
							<li>
								{t('project3.description.listItem5')}
								<ul>
									<li>{t('project3.description.listSubItem1')}</li>
									<li>{t('project3.description.listSubItem2')}</li>
									<li>{t('project3.description.listSubItem3')}</li>
									<li>{t('project3.description.listSubItem4')}</li>
								</ul>
							</li>
							<li>{t('project3.description.listItem6')}</li>
						</ul>
					</ul>
				</Section>
			)
		}
		return null
	}

	return (
		<PortFolioContainer>
			<ProjectContainer style={{ width: '100%', maxWidth: '1200px' }}>
				<ContentContainer>
					{/* Tab Navigation */}
					<Tabs>
						<Tab
							className={activeTab === 'fullStack' ? 'active' : ''}
							onClick={() => handleTabClick('fullStack')}
						>
							{t('categories.fullStack')}
						</Tab>
						<Tab
							className={activeTab === 'electron' ? 'active' : ''}
							onClick={() => handleTabClick('electron')}
						>
							{t('categories.electron')}
						</Tab>
					</Tabs>

					{/* Tab Content */}
					<TabContent>
						{activeTab === 'fullStack' && (
							<>
								<ProjectButton
									className={activeProject === 'torino' ? 'active' : ''}
									onClick={() => handleProjectClick('torino')}
								>
									{t('project2.subtitle')}
								</ProjectButton>
								<ProjectDetails isOpen={activeProject === 'torino'}>
									{renderProjectDetails('torino')}
								</ProjectDetails>

								<ProjectButton
									className={activeProject === 'sexybrain' ? 'active' : ''}
									onClick={() => handleProjectClick('sexybrain')}
								>
									{t('project1.subtitle')}
								</ProjectButton>
								<ProjectDetails isOpen={activeProject === 'sexybrain'}>
									{renderProjectDetails('sexybrain')}
								</ProjectDetails>
							</>
						)}

						{activeTab === 'electron' && (
							<>
								<ProjectButton
									className={activeProject === 'youtube_copilot' ? 'active' : ''}
									onClick={() => handleProjectClick('youtube_copilot')}
								>
									{t('project3.subtitle')}
								</ProjectButton>
								<ProjectDetails isOpen={activeProject === 'youtube_copilot'}>
									{renderProjectDetails('youtube_copilot')}
								</ProjectDetails>
							</>
						)}
					</TabContent>
				</ContentContainer>
			</ProjectContainer>
		</PortFolioContainer>
	)
}

export default Portfolio
