import JavascriptLogo from '../assets/img/javascript.svg';
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
import profilePicture from '../assets/resume/사진.jpg';
import Flex from '../components/styles/Flex.styled.js';
import { ProfilePic } from '../components/styles/resume/profile.styled.js';
import { Contact } from '../components/styles/resume/Contact.styled.js';
import { Stack } from '../components/styles/resume/Stack.styled.js';
import {
	CardContainer,
	Border,
	Card,
	Content1,
	Content2,
} from '../components/styles/resume/CardContainer.styled.js';
import { Section } from '../components/styles/resume/Section.styled.js';
import { Badge } from '../components/styles/resume/Badge.styled.js';
import { Highlight } from '../components/styles/resume/Highlight.styled.js';
import { H2, H3 } from '../components/styles/Title.styled.js';
import { LineBreak } from '../components/styles/LineBreak.styled.js';

const Resume = () => {
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
						sexybrain.dev를 운영하는 한형석입니다. <br />
						<br />
						처음부터 끝까지 <Highlight>JavaScript</Highlight>와 <Highlight>React</Highlight>
						프레임워크 그리고 <Highlight>Styled Components</Highlight>를 통해 디자인과 기능들을
						구축하면서 직접 학습을 진행하고 있습니다. <br />
						UX/UI 디자인을 고민하며 레이아웃과 반응형 앱을 구현하고 개선을 통해 사용자가 즐기는 앱을
						만드는 것이 목적입니다. <br />
						<br />
						저는, 논리적인 사고방식으로 인해 문제를 이해하고 효율적으로 처리를 하는 것을 좋아하고,
						끊임없는 노력과 작업을 통해 효율이 좋은 기능과 환경을 구축하여 클린 코드 베이스를
						유지하는 것을 늘 고민 하고 있고, 매일 배우며 중요한 컨셉은 직접 진행 하고 있는
						프로젝트에 적용을 함으로써 학습을 진행하고 있습니다.
						<br />
						<br /> "성공한 회사는 주 클라이언트들이 가지고 있는 문제를 인식하고 해결할 수 있는
						방법을 기획하여 효과적인 해결책을 제공하면서 끊임없이 성장하는 것을 중요하게 생각 하듯",
						동료들과 협업하는 소프트 스킬과 관리하는 리더십의 중요성을 이해하고, 특히 대화 방식들
						중에 미괄식보다 두괄식 대화를 더 자주 사용 하는 편입니다. <br />
						<br />
						해외에서 20년 넘게 진해 온 저는 한국말과 영어 둘 다 편합니다. 비록 개발자로서는 늦은
						나이에 시작해서 아직 주니어 개발자이지만, 지금까지 쌓아온 경험을 토대로 더욱더 멋진
						개발자로 회사에 기여할 수 있기를 원합니다. <br />
						<br />
						기회만 주신다면 더욱더 성장을 할 수 있는 회사를 만들기 위해 최선을 다하는 개발자가
						되겠습니다. 감사합니다.
					</p>
				</Content1>
			</Section>
			<H2 className='mainTitle'>보유기술</H2>
			<LineBreak />
			<Section>
				<H3>프론트엔드</H3>
				<Flex wrap={'wrap'} style={{ paddingTop: '15px', paddingBottom: '25px' }}>
					<Badge>
						<img src={html} alt='html5' />
						<p> HTML5 </p>
					</Badge>
					<Badge>
						<img src={JavascriptLogo} alt='JavaScript' />
						<p> JavaScript(ES6) </p>
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
						<img src={react} alt='React' />
						<p> React </p>
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
						<img src={bootstrap} alt='Bootstrap' />
						<p> Bootstrap </p>
					</Badge>
					<Badge>
						<img src={materialUi} alt='Material UI' />
						<p> Material UI </p>
					</Badge>
					<Badge>
						<img src={wordpress} alt='Wordpress' />
						<p> Wordpress </p>
					</Badge>
					<Badge>
						<img src={styledComponents} alt='Styled Components' />
						<p> Styled Components </p>
					</Badge>
				</Flex>

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
									<p>Confluence</p>
									<p>Google Drive</p>
									<p>Slack</p>
									<p>Notion</p>
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
				<H3>sexybrain.dev (현재 사이트)</H3>
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
							<img src={styledComponents} alt='Styled Components' />
							<p> Styled Components </p>
						</Badge>
						<Badge>
							<img src={sass} alt='Sass' />
							<p> Sass </p>
						</Badge>
						<Badge>
							<img src={firebase} alt='Firebase' />
							<p> Firebase </p>
						</Badge>
					</Stack>{' '}
					<li>
						처음부터 끝까지 <Highlight>템플릿 없이</Highlight> 개발중
					</li>
					<ul>
						<li>반응형 웹</li>
						<li>블로그 (마크다운)</li>
						<ul>
							<li>로그인 / 로그아웃</li>
							<li>로그인시 포스팅 페이지, 수정/지우기 활성화</li>
							<li>태그 + 카테고리로 정렬</li>
						</ul>
						<li>포트폴리오</li>
					</ul>
				</ul>
			</Section>
		</main>
	);
};

export default Resume;
