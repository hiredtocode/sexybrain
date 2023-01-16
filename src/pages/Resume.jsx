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
import {
	Flex,
	H2,
	H3,
	Highlight,
	LineBreak,
} from '../components/styles/General.styled.js'

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

const Resume = () => {
	const mode = useSelector(state => state.darkmode.mode)

	useTitle('Resume')

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
					<p>
						한형석 / Jason
						<span className='subText'> 1984 (39세/만 38세) / 남 </span>
					</p>
					<p>jasonhan@kakao.com</p>
					<p>010-4394-8891</p>
					<p>서울 동작구</p>
					<p>
						<span>국적:</span> 캐나다 (F4 재외동포)
					</p>
				</Contact>
			</Flex>
			<H2 className='mainTitle'>자기소개서</H2>
			<LineBreak />
			<Section>
				<H3>안녕하세요,</H3>
				<Content1>
					<p>
						<Highlight>JavaScript(ES6+)</Highlight>와{' '}
						<Highlight>React</Highlight>프레임워크 그리고{' '}
						<Highlight>Styled Components</Highlight>를 통해 디자인과 기능들을
						구축하고 <Highlight>Redux</Highlight>로 생태 관리 패턴을 진행하고
						있습니다. <br />
						<Highlight>사용자 중심의 UX/UI</Highlight> 디자인을 고민하며
						레이아웃과 반응형 앱을 구현하고 성능의 최적화를 위해 개선을 통해
						사용자가 보기에도 좋고 사용하기 편한 웹앱을 만들고{' '}
						<Highlight>Git</Highlight>을 통해 버전 컨트롤링을 하고 있습니다.{' '}
						<br />
						<br />
						새로운 기술에 관심이 많고, 논리적인 사고방식으로 인해 문제를
						이해하고 효율적으로 처리를 하는 것을 즐깁니다. <br />
						끊임없는 노력과 작업을 통해 효율이 좋은 기능과 환경을 구축하여 코드
						리팩토링과 클린 코드 베이스를 유지하는 것을 늘 신경쓰고 있고, 매일
						배우며 중요한 컨셉은 직접 진행 하고 있는 프로젝트에 적용을 하고 개인
						블로그를 작성하여 학습을 진행하고 있습니다. <br />
						<br />
						동료들과 협업하는 소프트 스킬과 관리하는 리더십의 중요성을 이해하고,
						특히 대화 방식들 중에 미괄식보다 두괄식 대화를 더 자주 사용 하는
						편입니다. <br />
						<br />
						어린 나이에 이민을 가서 캐나다 국적을 가지고 있습니다. <br /> 20년
						넘게 살았고 저는 한국말과 영어 둘 다 편합니다. 비록 개발자로서는
						늦은 나이에 시작해서 아직 주니어 개발자이지만, 지금까지 쌓아온
						경험을 토대로 더욱더 멋진 개발자로 회사에 기여할 수 있기를 원합니다.{' '}
						<br />
						<br />
						기회만 주신다면 더욱더 성장을 할 수 있는 회사를 만들기 위해 최선을
						다하는 개발자가 되겠습니다. 감사합니다.
					</p>
				</Content1>
			</Section>
			<H2 className='mainTitle'>보유기술</H2>
			<LineBreak />
			<Section>
				<H3>프론트엔드</H3>
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
						<img src={angular} alt='Angular' />
						<p> Angular </p>
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

				<h3>HTML, SASS, JavaScript(TypeScript)</h3>
				<ul>
					<li>HTML / SASS를 통한 레이아웃과 반응형 웹엡 구현이 가능합니다.</li>
					<li>
						Styled Component를 사용하여 앱이 확장을 하여도 스타일링 버그가
						생기는것을 방지 합니다.
					</li>
					<li>JavaScript ES6+ 로 개발이 가능합니다.</li>
					<li>
						Angular으로 개발을 시작 하여서 Typescript를 사용한 경험이 있습니다.
					</li>
				</ul>

				<h3>Framework & Library</h3>
				<ul>
					<li>
						React의 상태 관리 및 props, 그리고 컴포넌트를 설계 가능 합니다.
					</li>
					<li>React-router-dom을 통해 SPA 구현이 가능 합니다.</li>
					<li>
						React.memo, useMemo, useCallback을 통해 어플리케이션의 최적화 경험이
						있습니다.
					</li>
					<li>Redux Toolkit을 통해 상태관리를 해 보았습니다.</li>
					<li>
						Next.js를 통해 서버사이드 렌더링, 스테틱 웹사이트 앱을 개발하고
						있습니다.
					</li>
					<li>Angular를 사용하여서 웹앱을 2개월정도 개발 한 적이 있습니다.</li>
				</ul>

				<h3>Tools</h3>
				<ul>
					<li>Jira를 통해 프로젝트를 진행 해 보았던 경험이 있습니다.</li>
				</ul>

				<Flex wrap={'wrap'} justify={'space-around'}>
					<CardContainer>
						<Border>
							<Card>
								<Content2>
									<H3>백엔드</H3>
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
									<p>Git (버전 컨트롤)</p>
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
									<H3>Other</H3>
									<p>영어작문</p>
									<p>문제해결</p>
									<p>컴퓨터활용</p>
									<p>리더십</p>
								</Content2>
							</Card>
						</Border>
					</CardContainer>
				</Flex>
			</Section>

			<section className='mainTitle'>
				<H2 className='mainTitle'>개인 프로젝트</H2>
				<LineBreak />
			</section>
			<Section>
				<Flex>
					<H3>sexybrain.dev (현재 사이트)</H3>
					<ProjectLink>
						<GithubButtonForPortfolio
							link='https://github.com/hiredtocode/sexybrain'
							title='sexybrain github'
						/>
					</ProjectLink>
				</Flex>
				<span className='light'> 2022.09 ~ Present</span>
				<br />
				<ul className='projectBullet'>
					<Stack>
						<span>스택: </span>
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
					<li>
						처음부터 끝까지 <Highlight>템플릿 없이</Highlight> 개발중입니다. 그
						이유는 React로 개발을 처음 해 보았고, 블로그라는 웹 앱이 어떻게
						돌아가는지 궁금증을 풀고 무엇보다 형식적인 공부를 하는 것 보다는
						작은 프로젝트를 개발 하면서 궁금해지고 필요한 스킬을 배울때 효율성이
						좋다고 생각을 했습니다.
					</li>
					<li>
						Styling은 처음에 CSS로 진행을 하였고, SASS을 배운 후에 잠깐 도입을
						시켰다가 Styled Components를 알게 된 후로 Styled components로 개발을
						하여 추후 관리를 할 때에 편하고 무엇보다 예상치 못한 스타일링
						버그들이 없는게 큰 장점 입니다.
						<ul>
							<li>반응형 웹엡</li>
						</ul>
					</li>
					<li>
						백앤드는 Firebase로 로그인, 포스팅, 수정, 지우기를 활성화
						하였습니다.
					</li>
					<ul>
						<li>블로그 (마크다운)</li>
						<ul>
							<li>로그인 / 로그아웃</li>
							<li>로그인시 포스팅 페이지, 수정/지우기</li>
							<li>태그 + 카테고리로 정렬</li>
						</ul>
						<li>포트폴리오</li>
					</ul>
				</ul>
			</Section>
			<section className='mainTitle'>
				<H2 className='mainTitle'>진행중인 프로젝트</H2>
				<LineBreak />
			</section>
			<Section>
				<H3>Dev (이름과 주소 미정)</H3>
				<span className='light'> 2022.1 ~ Present</span>
				<br />
				<ul className='projectBullet'>
					<Stack>
						<span>스택: </span>

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
					<li>
						개발자들의 막막함을 없애주는 플랫폼을 개발 중입니다. (더 자세한
						내용은 나중에 추가 하겠습니다.)
					</li>
					<li>
						이 프로젝트를 개발 하면서 학습을 해야 하는것들:
						<ul>
							<li>Next.js</li>
							<li>Redux</li>
							<li>JWT Auth</li>
							<li>Express JS</li>
							<li>MongoDB</li>
						</ul>
					</li>
				</ul>
			</Section>
		</main>
	)
}

export default Resume
