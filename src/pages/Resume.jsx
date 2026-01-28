import { useSelector } from 'react-redux'
import bootstrap from '../assets/img/bootstrap.svg'
import css from '../assets/img/css3.svg'
import firebase from '../assets/img/firebase-icon.svg'
import html from '../assets/img/html.svg'
import JavascriptLogo from '../assets/img/javascript.svg'
import materialUi from '../assets/img/material-ui.svg'
import nextjsWhite from '../assets/img/nextjs-white.svg'
import nextjs from '../assets/img/nextjs.svg'
import nodejs from '../assets/img/nodejs.svg'
import nodejsLight from '../assets/img/nodejsLight.svg'
import postgresql from '../assets/img/postgresql.svg'
import react from '../assets/img/react.svg'
import sass from '../assets/img/sass.svg'
import styledComponents from '../assets/img/styledComponentsLogo.svg'
import supabase from '../assets/img/supabase.svg'
import tailwindcss from '../assets/img/tailwindcss.svg'
import typescript from '../assets/img/typescript.svg'
import profilePicture from '../assets/resume/사진.jpg'
import useTitle from '../components/hook/useTitle'
import { Flex, H2, H3, LineBreak } from '../components/styles/General.styled.js'

import {
	Badge,
	Contact,
	Content1,
	ProfilePic,
	Section,
	ToolsCard,
	ToolsCardGrid,
	ToolsCardList,
	ToolsCardTitle,
} from '../components/styles/Resume.styled.js'

import { useTranslation } from 'react-i18next'

const Resume = () => {
	const { t } = useTranslation('global') // Initialize the i18next translation hook
	const mode = useSelector(state => state.darkmode.mode)

	useTitle(t('resume.title')) // Set the title using the translated title

	return (
		<main>
			<Flex justify={'space-around'} align='center'>
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
						<img src={tailwindcss} alt='Tailwind CSS' />
						<p> Tailwind CSS </p>
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
						<img src={mode === 'dark' ? nodejsLight : nodejs} alt='Node.js' />
						<p> Node.js </p>
					</Badge>
					<Badge>
						<img src={firebase} alt='Firebase' />
						<p> Firebase </p>
					</Badge>
					<Badge>
						<img src={supabase} alt='Supabase' />
						<p> Supabase </p>
					</Badge>
					<Badge>
						<img src={postgresql} alt='PostgreSQL' />
						<p> PostgreSQL </p>
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

				<ToolsCardGrid>
					<ToolsCard>
						<ToolsCardTitle>Back-end</ToolsCardTitle>
						<ToolsCardList>
							<p>Firebase</p>
							<p>Supabase</p>
							<p>PostgreSQL</p>
							<p>Node.js</p>
							<p>RESTful API</p>
						</ToolsCardList>
					</ToolsCard>
					<ToolsCard>
						<ToolsCardTitle>DevOps</ToolsCardTitle>
						<ToolsCardList>
							<p>Git</p>
							<p>Github - CI/CD</p>
						</ToolsCardList>
					</ToolsCard>
					<ToolsCard>
						<ToolsCardTitle>Collaboration</ToolsCardTitle>
						<ToolsCardList>
							<p>Jira</p>
							<p>Slack</p>
							<p>Notion</p>
							<p>Google Drive</p>
							<p>Discord</p>
						</ToolsCardList>
					</ToolsCard>
					<ToolsCard>
						<ToolsCardTitle>{t('other.title')}</ToolsCardTitle>
						<ToolsCardList>
							<p>{t('other.skills.problemSolving')}</p>
							<p>{t('other.skills.computerSkills')}</p>
							<p>{t('other.skills.leadership')}</p>
							<p>{t('other.skills.criticalThinking')}</p>
						</ToolsCardList>
					</ToolsCard>
				</ToolsCardGrid>
			</Section>
			{/* Skills section END */}
		</main>
	)
}

export default Resume
