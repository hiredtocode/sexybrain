import { Link } from 'react-router-dom';
import { excerpt } from '../utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {
	StyledCard,
	Description,
	Date,
	Body,
	IconContainer,
	CardContainer,
} from './styles/Card.styled.js';
import Flex from './styles/Flex.styled.js';
import { CategoryMark } from '../components/styles/Card.styled';
import Tags from '../components/Tags';
import javascript from '../assets/img/javascript.svg';
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
import tailwindcss from '../assets/img/tailwindcss.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';

export default function Card({ blogs, user, handleDelete }) {
	const userId = user?.uid;

	return (
		<>
			{blogs?.map((item, index) => (
				<CardContainer key={index}>
					<Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
						<StyledCard>
							<Description>
								<CategoryMark>
									{item.category === 'HTML' ? (
										<img key={index} src={html} alt={item.category} />
									) : item.category === 'JavaScript' ? (
										<img key={index} src={javascript} alt={item.category} />
									) : item.category === 'Angular' ? (
										<img key={index} src={angular} alt={item.category} />
									) : item.category === 'TypeScript' ? (
										<img key={index} src={typescript} alt={item.category} />
									) : item.category === 'React' ? (
										<img key={index} src={react} alt={item.category} />
									) : item.category === 'CSS' ? (
										<img key={index} src={css} alt={item.category} />
									) : item.category === 'SASS' ? (
										<img key={index} src={sass} alt={item.category} />
									) : item.category === 'Bootstrap' ? (
										<img key={index} src={bootstrap} alt={item.category} />
									) : item.category === 'Material UI' ? (
										<img key={index} src={materialUi} alt={item.category} />
									) : item.category === 'Wordpress' ? (
										<img key={index} src={wordpress} alt={item.category} />
									) : item.category === 'Styled Components' ? (
										<img key={index} src={styledComponents} alt={item.category} />
									) : item.category === 'Firebase' ? (
										<img key={index} src={firebase} alt={item.category} />
									) : item.category === 'Tailwind CSS' ? (
										<img key={index} src={tailwindcss} alt={item.category} />
									) : item.category === 'What I learned' ? (
										<img key={index} src={programmer} alt={item.category} />
									) : (
										<img key={index} src={question} alt={item.category} />
									)}
								</CategoryMark>
								<Flex justify={'space-between'} align={'center'} style={{ paddingLeft: '200px' }}>
									<h3>{item.title}</h3>
									<Date>
										<span>{item.timestamp.toDate().toDateString()}</span>
									</Date>
								</Flex>
								<Body style={{ paddingLeft: '230px' }}>{excerpt(item.description, 120)}</Body>
								<div style={{ paddingLeft: '260px' }}>
									<Tags tags={item.tags} />
								</div>
							</Description>
							{/* <div>
								<img src={item.imgUrl} alt={item.title} />
							</div> */}
						</StyledCard>
					</Link>
					{userId && item.userId === userId && (
						<IconContainer style={{ float: 'right' }}>
							<FontAwesomeIcon
								icon={faTrash}
								style={{ cursor: 'pointer', paddingRight: '10px', textDecoration: 'none' }}
								size='2x'
								onClick={() => handleDelete(item.id)}
							/>
							<Link to={`/update/${item.id}`}>
								<FontAwesomeIcon
									icon={faEdit}
									name='edit'
									style={{ cursor: 'pointer' }}
									size='2x'
								/>
							</Link>
						</IconContainer>
					)}
				</CardContainer>
			))}
		</>
	);
}
