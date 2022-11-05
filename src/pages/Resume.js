import JavascriptLogo from "../assets/img/javascript.svg";
import angular from "../assets/img/angular.svg";
import html from "../assets/img/html.svg";
import typescript from "../assets/img/typescript.svg";
import react from "../assets/img/react.svg";
import css from "../assets/img/css3.svg";
import sass from "../assets/img/sass.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import materialUi from "../assets/img/material-ui.svg";
import wordpress from "../assets/img/wordpress.svg";
import styledComponents from "../assets/img/styled-components.svg";
import profilePicture from "../assets/resume/사진.jpg";
import "./resume.scss";

const Resume = () => {
	return (
		<main>
			{/* <div>
    <button>한글</button>
    <button>English</button>
  </div>  */}
			<header className="container">
				<section id="picture">
					<div className="box">
						<div className="box-cover">
							<img src={profilePicture} alt="사진" />
						</div>
					</div>
				</section>
				<section id="contact">
					<p>
						한형석 / Jason
						<span className="light" id="age">
							{" "}
							1984 (39세/만 38세) / 남{" "}
						</span>
					</p>
					<p>jasonhan@kakao.com</p>
					<p>010-4394-8891</p>
					<p>서울 동작구</p>
					<p>
						<span>국적:</span> 캐나다 (F4 재외동포)
					</p>
				</section>
			</header>
			<section className="mainTitle">
				<h2 className="mainTitle">자기소개서</h2>
				<div className="linebreak"></div>
			</section>
			<section className="subMainSection">
				<h3>Introduction</h3>
				<div className="content">
					<p>
						안녕하세요,
						<span className="underlineHighlight"> 긍정적이고 밝은 성격</span>을 지닌 비전공자이며
						37살(약 2년전) 때 코딩 매력에 빠져서 개발자가 되기로 마음을 먹고 독학을 했습니다. <br />
						<span className="underlineHighlight">논리적</span>인 사고방식과{" "}
						<span className="underlineHighlight">UX</span>를 항상 고민을 하며 레이아웃과{" "}
						<span className="underlineHighlight">반응형 앱</span>을 만들기 위해 노력을 하고
						있습니다. <br />
						<br />
						비즈니스 성장에 기여하는 일을 최우선으로, 시간과 사람을 관리하는
						<span className="underlineHighlight">리더쉽</span>의 중요성을 알고 생각과 계획보다
						Execution이 제일 중요하다고 생각하며, 임팩트는 혼자가 아닌
						<span className="underlineHighlight">함께 만들어 나아가</span>는 것이기에
						<span className="underlineHighlight">대화 스킬과 협업</span>이 중요 하다고 생각합니다.
					</p>
					<p>
						비록 개발자 공부를 늦은 나이에 시작했지만, 꾸준히 노력하여 능력 있는 개발자가 되는것이
						목표입니다. <br />
						그리고, 해외(<span className="underlineHighlight">캐나다</span>)에서 20년 넘게 쌓은
						경험으로 도움이 되는 인재가 되길 원합니다.
					</p>
					{/* <p>
        <a href="#" target="_blank" className="linkUnderline"
          >여기를 클릭 하시면 PDF로 된 이력서를 보실수 있습니다.</a
        >
      </p>  */}
				</div>
			</section>
			<section className="mainTitle">
				<h2 className="mainTitle">보유기술</h2>
				<div className="linebreak"></div>
			</section>
			<section className="subMainSection">
				<h3>프론트엔드</h3>
				<div className="frontend">
					<div className="logo-box">
						<li id="html5" className="changeText">
							<span className="logo-name">
								<img src={html} alt="html5" />
								<span className="text"> HTML5 </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="javascript" className="changeText">
							<span className="logo-name">
								<img src={JavascriptLogo} alt="JavaScript" />
								<span className="text"> JavaScript(ES6) </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="angular" className="changeText">
							<span className="logo-name">
								<img src={angular} alt="Angular" />
								<span className="text"> Angular </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="typescript" className="changeText">
							<span className="logo-name">
								<img src={typescript} alt="TypeScript" />
								<span className="text"> TypeScript </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="react" className="changeText">
							<span className="logo-name">
								<img src={react} alt="React" />
								<span className="text"> React </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li className="changeText">
							<span className="logo-name">
								<img id="css3" src={css} alt="CSS3" />
								<span>
									<span className="text"> CSS3 </span>
								</span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="sass" className="changeText">
							<span className="logo-name">
								<img src={sass} alt="Sass" />
								<span className="text"> Sass </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="bootstrap" className="changeText">
							<span className="logo-name">
								<img src={bootstrap} alt="Bootstrap" />
								<span className="text"> Bootstrap </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="material_ui" className="changeText">
							<span className="logo-name">
								<img src={materialUi} alt="Material UI" />
								<span className="text"> Material UI </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="wordpress" className="changeText">
							<span className="logo-name">
								<img src={wordpress} alt="Wordpress" />
								<span className="text"> Wordpress </span>
							</span>
						</li>
					</div>
					<div className="logo-box">
						<li id="styled" className="changeText">
							<span className="logo-name">
								<img src={styledComponents} alt="Styled Components" />
								<span className="text"> Styled Components </span>
							</span>
						</li>
					</div>
				</div>

				<div className="skill-container">
					<article className="card-container">
						<div className="border">
							<div className="card">
								<div className="content">
									<h3>백엔드</h3>
									<p>RESTful API</p>
									<p>NodeJS</p>
									<p>Firebase</p>
								</div>
							</div>
						</div>
					</article>
					<article className="card-container">
						<div className="border">
							<div className="card">
								<div className="content">
									<h3>DevOps</h3>
									<p>Git (버전 컨트롤)</p>
									<p>Github - CI/CD Integration</p>
								</div>
							</div>
						</div>
					</article>
					<article className="card-container">
						<div className="border">
							<div className="card">
								<div className="content">
									<h3>Collaboration</h3>
									<p>Jira</p>
									<p>Confluence</p>
									<p>Google Drive</p>
									<p>Slack</p>
									<p>Notion</p>
								</div>
							</div>
						</div>
					</article>
					<article className="card-container">
						<div className="border">
							<div className="card">
								<div className="content">
									<h3>Other</h3>
									<p>비즈니스 영어</p>
									<p>Communication Skills</p>
									<p>영어작문</p>
									<p>문제해결</p>
									<p>컴퓨터활용</p>
									<p>리더십</p>
								</div>
							</div>
						</div>
					</article>
				</div>
				<div className="bullets"></div>
				<div className="bullets"></div>
				<div className="bullets"></div>
				<div className="bullets"></div>
			</section>

			<section className="mainTitle">
				<h2 className="mainTitle">개인 프로젝트</h2>
				<div className="linebreak"></div>
			</section>
			<section className="subMainSection">
				<h3>sexybrain.dev (현재 사이트)</h3>
				<span className="light"> 2022.09 ~ Present</span>
				<br />
				<ul className="projectBullet">
					<li>React 프레임워크를 사용</li>
					<li>이미 만들어진 템플릿을 사용하지 않고, 처음부터 끝까지 개인 제작을 진행 중입니다</li>
					<li>
						SexyBrain.Dev는 3가지로 만들 예정입니다
						<ul>
							<li>이력서 - resume.sexybrain.dev</li>
							<li>포트폴리오 - portfolio.sexybrain.dev</li>
							<li>블로그 - blog.sexybrain.dev</li>
						</ul>
					</li>
					<li>라이트 / 다크모드 기능 투입 예정</li>
				</ul>
			</section>
		</main>
	);
};

export default Resume;
