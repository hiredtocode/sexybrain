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
import styledComponents from '../assets/img/styled-components.svg';
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
						<Highlight> 긍정적이고 밝은 성격</Highlight>을 지닌 비전공자이며, 37살 때 코딩 매력에
						빠져서 개발자가 되기로 마음을 먹고 독학을 했습니다. <br />
						<Highlight>논리적</Highlight>인 사고방식과 <Highlight>UX</Highlight>를 항상 고민을 하며
						레이아웃과 <Highlight>반응형 앱</Highlight>을 만들고 있습니다. <br />
						<br />
						비즈니스 성장에 기여하는 일을 최우선으로, 시간과 사람을 관리하는{' '}
						<Highlight>리더십</Highlight>의 중요성을 알고 생각과 계획보다 Execution이 제일
						중요하다고 생각하며, 임팩트는 혼자가 아닌 <Highlight>함께 만들어 나아가</Highlight>는
						것이기에 <Highlight>대화 스킬과 협업</Highlight>이 중요 하다고 생각합니다.
					</p>
					<br />
					<br />
					<p>비록 늦은 나이에 시작을 했지만, 꾸준히 노력하여 능력 있는 개발자가 될것입니다.</p>
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
						<li>이력서 - sexybrain.dev/resume</li>
						<li>블로그 - sexybrain.dev</li>
						<ul>
							<li>로그인 / 로그아웃</li>
							<li>로그인시 포스팅 페이지 활성화 + 이미지 업로딩</li>
							<li>마크다운</li>
							<li>태그 + 카테고리</li>
							<li>검색 (개발중)</li>
						</ul>
						<li>포트폴리오 - sexybrain.dev/portfolio (개발중)</li>
					</ul>
				</ul>
			</Section>
		</main>
	);
};

export default Resume;
