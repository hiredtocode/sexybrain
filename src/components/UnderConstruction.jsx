import { H1 } from './styles/Title.styled';

const UnderConstruction = () => {
	return (
		<H1
			style={{
				width: '100%',
				background: 'lightgreen',
				color: 'black',
				position: 'absolute',
				top: '50px',
				textAlign: 'center',
			}}
		>
			블로그와 포트폴리오는 개발중입다.
		</H1>
	);
};

export default UnderConstruction;
