import { useSelector } from 'react-redux'
import bootstrap from '../assets/img/bootstrap.svg'
import css from '../assets/img/css3.svg'
import html from '../assets/img/html.svg'
import JavascriptLogo from '../assets/img/javascript.svg'
import materialUi from '../assets/img/material-ui.svg'
import nextjsWhite from '../assets/img/nextjs-white.svg'
import nextjs from '../assets/img/nextjs.svg'
import nodejs from '../assets/img/nodejs.svg'
import nodejsLight from '../assets/img/nodejsLight.svg'
import python from '../assets/img/python.svg'
import react from '../assets/img/react.svg'
import sass from '../assets/img/sass.svg'
import styledComponents from '../assets/img/styledComponentsLogo.svg'
import typescript from '../assets/img/typescript.svg'
import profilePicture from '../assets/resume/사진.jpg'
import useTitle from '../components/hook/useTitle'
import { Flex, H2, H3, LineBreak } from '../components/styles/General.styled.js'

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
				<H3>{t('skills.subtitle2')}</H3>
				<Flex
					wrap={'wrap'}
					style={{ paddingTop: '15px', paddingBottom: '25px' }}
				>
					<Badge>
						<img src={python} alt='Python' />
						<p> Python </p>
					</Badge>
					<Badge>
						<img src={mode === 'dark' ? nodejsLight : nodejs} alt='Node JS' />
						<p> Node.js </p>
					</Badge>
				</Flex>

				<H3>HTML, SASS, JavaScript(TypeScript)</H3>
				<ul>
					<li>{t('skills.htmlSassLayout')}</li>
					<li>{t('skills.styledComponents')}</li>
					<li>{t('skills.javascriptEs6')}</li>
					<li>{t('skills.typescriptExperience')}</li>
				</ul>

				<H3>Framework & Library</H3>
				<ul>
					<li>{t('framework.statePropsComponent')}</li>
					<li>{t('framework.spaImplementation')}</li>
					<li>{t('framework.optimizationExperience')}</li>
					<li>{t('framework.reduxToolkit')}</li>
					<li>{t('framework.nextJsExperience')}</li>
					{/* <li>{t('reactSkills.angularExperience')}</li> */}
				</ul>

				<H3>{t('tools.title')}</H3>

				<Flex wrap={'wrap'} justify={'space-around'}>
					<CardContainer>
						<Border>
							<Card>
								<Content2>
									<H3>Back-end</H3>
									<p>Python</p>
									<p>NodeJS</p>
									<p>RESTful API</p>
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
		</main>
	)
}

export default Resume
