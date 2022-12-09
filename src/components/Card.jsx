import { Link } from 'react-router-dom';
import { excerpt } from '../utility/excerpt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {
	StyledCard,
	Content,
	Date,
	Description,
	IconContainer,
	CardContainer,
	Box,
} from './styles/Card.styled.js';
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
import styledComponents from '../assets/img/styledComponentsLogo.svg';
import firebase from '../assets/img/firebase-icon.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';
import { H2 } from '../components/styles/Title.styled.js';
import { TagBox } from '../components/styles/TagSection.styled.js';
import { v4 as uuidv4 } from 'uuid';

export default function Card(props) {
	const { blogs, user, handleDelete } = props;
	const userId = user?.uid;
	const fontColor = `${({ theme }) => theme.colors.font}`;

	return (
		<>
			{blogs?.map((item) => (
				<CardContainer key={uuidv4()}>
					<Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: { fontColor } }}>
						<StyledCard>
							{/* Category matching logo on each card */}
							<CategoryMark>
								{item.category === 'HTML' ? (
									<img key={uuidv4()} src={html} alt={item.category} />
								) : item.category === 'JavaScript' ? (
									<img key={uuidv4()} src={javascript} alt={item.category} />
								) : item.category === 'Angular' ? (
									<img key={uuidv4()} src={angular} alt={item.category} />
								) : item.category === 'TypeScript' ? (
									<img key={uuidv4()} src={typescript} alt={item.category} />
								) : item.category === 'React' ? (
									<img key={uuidv4()} src={react} alt={item.category} />
								) : item.category === 'CSS' ? (
									<img key={uuidv4()} src={css} alt={item.category} />
								) : item.category === 'SASS' ? (
									<img key={uuidv4()} src={sass} alt={item.category} />
								) : item.category === 'Bootstrap' ? (
									<img key={uuidv4()} src={bootstrap} alt={item.category} />
								) : item.category === 'Material UI' ? (
									<img key={uuidv4()} src={materialUi} alt={item.category} />
								) : item.category === 'Wordpress' ? (
									<img key={uuidv4()} src={wordpress} alt={item.category} />
								) : item.category === 'Styled Components' ? (
									<img key={uuidv4()} src={styledComponents} alt={item.category} />
								) : item.category === 'Firebase' ? (
									<img key={uuidv4()} src={firebase} alt={item.category} />
								) : item.category === 'Tailwind CSS' ? (
									<img key={uuidv4()} src={tailwindcss} alt={item.category} />
								) : item.category === 'What I learned' ? (
									<img key={uuidv4()} src={programmer} alt={item.category} />
								) : (
									<img key={uuidv4()} src={question} alt={item.category} />
								)}
							</CategoryMark>
							{/* Category matching logo on each card END*/}
							<Content>
								<Box>
									<H2>{item.title}</H2>
									<Date>
										<span>작성:{item.createdTimestamp.toDate().toDateString()}</span>
										<span>업데이트:{item.lastUpdatedTimestamp?.toDate().toDateString()}</span>
									</Date>
								</Box>
								<Description>
									<span>{excerpt(item.description, 120)}</span>
								</Description>
								<TagBox>
									<Tags tags={item.tags} />
								</TagBox>
							</Content>
						</StyledCard>
					</Link>

					{/* Delete & Edit button */}
					{userId && item.userId === userId && (
						<IconContainer style={{ float: 'right' }}>
							<FontAwesomeIcon
								icon={faTrash}
								style={{ cursor: 'pointer', paddingRight: '10px', textDecoration: 'none' }}
								size='2x'
								aria-label={item.id}
								onClick={handleDelete(item.id)}
							/>
							<Link to={`/update/${item.id}`}>
								<FontAwesomeIcon
									icon={faEdit}
									name='edit'
									style={{ cursor: 'pointer', paddingRight: '10px', textDecoration: 'none' }}
									size='2x'
									aria-label={item.id}
								/>
							</Link>
						</IconContainer>
					)}
					{/* Delete & Edit button END*/}
				</CardContainer>
			))}
		</>
	);
}
