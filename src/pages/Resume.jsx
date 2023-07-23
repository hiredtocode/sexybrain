import { useSelector } from 'react-redux'
import angular from '../assets/img/angular.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import css from '../assets/img/css3.svg'
import firebase from '../assets/img/firebase-icon.svg'
import html from '../assets/img/html.svg'
import JavascriptLogo from '../assets/img/javascript.svg'
import jwt from '../assets/img/jwt.svg'
import materialUi from '../assets/img/material-ui.svg'
import mongodb from '../assets/img/mongodb.svg'
import nextjsWhite from '../assets/img/nextjs-white.svg'
import nextjs from '../assets/img/nextjs.svg'
import nodejs from '../assets/img/nodejs.svg'
import react from '../assets/img/react.svg'
import redux from '../assets/img/redux.svg'
import sass from '../assets/img/sass.svg'
import styledComponents from '../assets/img/styledComponentsLogo.svg'
import typescript from '../assets/img/typescript.svg'
import profilePicture from '../assets/resume/사진.jpg'
import useTitle from '../components/hook/useTitle'
import { Flex, H2, H3, LineBreak } from '../components/styles/General.styled.js'

import GithubButtonForPortfolio from '../components/GithubButtonForPortfolio'
import { ProjectLink } from '../components/styles/Portfolio.styled'
import {
	Badge,
	Border,
	Card,
	CardContainer,
	Contact,
	Content1,
	Content2,
	ProfilePic,
	Section,
	Stack,
} from '../components/styles/Resume.styled.js'

import { useTranslation } from 'react-i18next'

const Resume = () => {
	const { t } = useTranslation('global') // Initialize the i18next translation hook
	const mode = useSelector(state => state.darkmode.mode)

	useTitle(t('resume.title')) // Set the title using the translated title

	return (
		<main>
			<Flex justify={'space-around'}>
				<ProfilePic>
					<div className='box'>
						<div className='box-cover'>
							<img src={profilePicture} alt='사진' />
						</div>
					</div>
				</ProfilePic>

				<Contact>
					<p>{t('resume.name')}</p>
					<p>{t('resume.email')}</p>
					<p>{t('resume.phone')}</p>
					<p>{t('resume.address')}</p>
				</Contact>
			</Flex>
			{/* Intro section */}
			<H2 className='mainTitle'>{t('resume.mainTitle')}</H2>
			<LineBreak />
			<Section>
				<H3>{t('resume.mainSubTitle')}</H3>
				<Content1>
					{t('resume.content1.paragraph1')
						.split('\n')
						.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
				</Content1>
			</Section>
			{/* Intro section END */}
			{/* Skills section */}
			<H2 className='mainTitle'>{t('skills.title')}</H2>
			<LineBreak />
			<Section>
				<H3>{t('skills.subtitle1')}</H3>
				<Flex
					wrap={'wrap'}
					style={{ paddingTop: '15px', paddingBottom: '25px' }}
				>
					<Badge>
						<img src={html} alt='html5' />
						<p> HTML5 </p>
					</Badge>
					<Badge>
						<img src={JavascriptLogo} alt='JavaScript' />
						<p> JavaScript(ES6) </p>
					</Badge>
					<Badge>
						<img src={mode === 'dark' ? nextjsWhite : nextjs} alt='Next js' />
						<p> Next.js </p>
					</Badge>
					<Badge>
						<img src={react} alt='React' />
						<p> React </p>
					</Badge>
					{/* <Badge>
						<img src={angular} alt='Angular' />
						<p> Angular </p>
					</Badge> */}
					<Badge>
						<img src={typescript} alt='TypeScript' />
						<p> TypeScript </p>
					</Badge>
					<Badge>
						<img src={css} alt='CSS3' />
						<p> CSS3 </p>
					</Badge>
					<Badge>
						<img src={sass} alt='Sass' />
						<p> Sass </p>
					</Badge>
					<Badge>
						<img src={styledComponents} alt='Styled Components' />
						<p> Styled Components </p>
					</Badge>
					<Badge>
						<img src={bootstrap} alt='Bootstrap' />
						<p> Bootstrap </p>
					</Badge>
					<Badge>
						<img src={materialUi} alt='Material UI' />
						<p> Material UI </p>
					</Badge>
				</Flex>

				<h3>HTML, SASS, JavaScript(TypeScript)</h3>
				<ul>
					<li>{t('skills.htmlSassLayout')}</li>
					<li>{t('skills.styledComponents')}</li>
					<li>{t('skills.javascriptEs6')}</li>
					<li>{t('skills.typescriptExperience')}</li>
				</ul>

				<h3>Framework & Library</h3>
				<ul>
					<li>{t('framework.statePropsComponent')}</li>
					<li>{t('framework.spaImplementation')}</li>
					<li>{t('framework.optimizationExperience')}</li>
					<li>{t('framework.reduxToolkit')}</li>
					<li>{t('framework.nextJsExperience')}</li>
					{/* <li>{t('reactSkills.angularExperience')}</li> */}
				</ul>

				<h3>{t('tools.title')}</h3>

				<Flex wrap={'wrap'} justify={'space-around'}>
					<CardContainer>
						<Border>
							<Card>
								<Content2>
									<H3>Back-end</H3>
									<p>RESTful API</p>
									<p>NodeJS</p>
									<p>Firebase</p>
								</Content2>
							</Card>
						</Border>
					</CardContainer>
					<CardContainer>
						<Border>
							<Card>
								<Content2>
									<H3>DevOps</H3>
									<p>Git</p>
									<p>Github - CI/CD</p>
								</Content2>
							</Card>
						</Border>
					</CardContainer>
					<CardContainer>
						<Border>
							<Card>
								<Content2>
									<H3>Collaboration</H3>
									<p>Jira</p>
									<p>Slack</p>
									<p>Notion</p>
									<p>Google Drive</p>
									<p>Discord</p>
								</Content2>
							</Card>
						</Border>
					</CardContainer>
					<CardContainer>
						<Border>
							<Card>
								<Content2>
									<H3>{t('other.title')}</H3>
									<p>{t('other.skills.englishComposition')}</p>
									<p>{t('other.skills.problemSolving')}</p>
									<p>{t('other.skills.computerSkills')}</p>
									<p>{t('other.skills.leadership')}</p>
								</Content2>
							</Card>
						</Border>
					</CardContainer>
				</Flex>
			</Section>
			{/* Skills section END */}
			{/* Personal project section */}
			<section className='mainTitle'>
				<H2 className='mainTitle'>{t('project1.title')}</H2>
				<LineBreak />
			</section>
			<Section>
				<Flex>
					<H3>{t('project1.subtitle')}</H3>
					<ProjectLink>
						<GithubButtonForPortfolio
							link={t('project1.link')}
							title={t('project1.linkTitle')}
						/>
					</ProjectLink>
				</Flex>
				<span className='light'>{t('project1.duration')}</span> <br />
				<ul className='projectBullet'>
					<Stack>
						<span>{t('project1.stack')}</span>
						<Badge>
							<img src={react} alt='React' />
							<p> React </p>
						</Badge>
						<Badge>
							<img src={redux} alt='Redux' />
							<p> Redux </p>
						</Badge>
						<Badge>
							<img src={firebase} alt='Firebase' />
							<p> Firebase </p>
						</Badge>
						<Badge>
							<img src={styledComponents} alt='Styled Components' />
							<p> Styled Components </p>
						</Badge>
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
			{/* Personal project section END */}
			{/* Project in progress section */}
			<section className='mainTitle'>
				<H2 className='mainTitle'>{t('project2.title')}</H2>
				<LineBreak />
			</section>
			<Section>
				<H3>{t('project2.subtitle')}</H3>
				<span className='light'> 2022.1 ~ Present</span>
				<br />
				<ul className='projectBullet'>
					<Stack>
						<span>{t('project1.stack')}</span>

						<Badge>
							<img src={mode === 'dark' ? nextjsWhite : nextjs} alt='Next js' />
							<p> Next.js </p>
						</Badge>
						<Badge>
							<img src={redux} alt='Redux' />
							<p> Redux </p>
						</Badge>
						<Badge>
							<img src={jwt} alt='JWT' />
							<p> JWT Auth </p>
						</Badge>
						<Badge>
							<img src={mongodb} alt='Firebase' />
							<p> MongoDB </p>
						</Badge>
						<Badge>
							<img src={nodejs} alt='NodeJS' />
							<p> Express JS </p>
						</Badge>
						<Badge>
							<img src={styledComponents} alt='Styled Components' />
							<p> Styled Components </p>
						</Badge>
					</Stack>{' '}
					<ul>
						<li>{t('project2.description.listItem1')}</li>
						<li>{t('project2.description.listItem2')}</li>
						<ul>
							<li>{t('project2.description.listSubItem1')}</li>
							<li>{t('project2.description.listSubItem2')}</li>
							<li>{t('project2.description.listSubItem3')}</li>
							<li>{t('project2.description.listSubItem4')}</li>
							<li>{t('project2.description.listSubItem5')}</li>
						</ul>
					</ul>
				</ul>
			</Section>

			{/* Project in progress section END*/}
		</main>
	)
}

export default Resume
