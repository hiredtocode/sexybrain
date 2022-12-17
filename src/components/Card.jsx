import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import angular from '../assets/img/angular.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import css from '../assets/img/css3.svg';
import firebase from '../assets/img/firebase-icon.svg';
import html from '../assets/img/html.svg';
import javascript from '../assets/img/javascript.svg';
import materialUi from '../assets/img/material-ui.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';
import react from '../assets/img/react.svg';
import sass from '../assets/img/sass.svg';
import styledComponents from '../assets/img/styledComponentsLogo.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import typescript from '../assets/img/typescript.svg';
import wordpress from '../assets/img/wordpress.svg';
import { CategoryMark } from '../components/styles/Card.styled';
import { TagBox } from '../components/styles/TagSection.styled.js';
import { H2 } from '../components/styles/Title.styled.js';
import Tags from '../components/Tags';
import { excerpt } from '../utility/excerpt';
import {
	Box,
	CardContainer,
	Content,
	Date,
	Description,
	IconContainer,
	StyledCard,
} from './styles/Card.styled.js';

export default function Card(props) {
	const { blogs, user, handleDelete } = props;
	const userId = user?.uid;
	const fontColor = `${({ theme }) => theme.colors.font}`;

	return (
		<>
			{blogs?.map((post) => (
				<CardContainer key={uuidv4()}>
					<Link to={`/detail/${post.id}`} style={{ textDecoration: 'none', color: { fontColor } }}>
						<StyledCard>
							{/* Category matching logo on each card */}
							<CategoryMark>
								{post.category === 'HTML' ? (
									<img key={uuidv4()} src={html} alt={post.category} />
								) : post.category === 'JavaScript' ? (
									<img key={uuidv4()} src={javascript} alt={post.category} />
								) : post.category === 'Angular' ? (
									<img key={uuidv4()} src={angular} alt={post.category} />
								) : post.category === 'TypeScript' ? (
									<img key={uuidv4()} src={typescript} alt={post.category} />
								) : post.category === 'React' ? (
									<img key={uuidv4()} src={react} alt={post.category} />
								) : post.category === 'CSS' ? (
									<img key={uuidv4()} src={css} alt={post.category} />
								) : post.category === 'SASS' ? (
									<img key={uuidv4()} src={sass} alt={post.category} />
								) : post.category === 'Bootstrap' ? (
									<img key={uuidv4()} src={bootstrap} alt={post.category} />
								) : post.category === 'Material UI' ? (
									<img key={uuidv4()} src={materialUi} alt={post.category} />
								) : post.category === 'Wordpress' ? (
									<img key={uuidv4()} src={wordpress} alt={post.category} />
								) : post.category === 'Styled Components' ? (
									<img key={uuidv4()} src={styledComponents} alt={post.category} />
								) : post.category === 'Firebase' ? (
									<img key={uuidv4()} src={firebase} alt={post.category} />
								) : post.category === 'Tailwind CSS' ? (
									<img key={uuidv4()} src={tailwindcss} alt={post.category} />
								) : post.category === 'Today I learned' ? (
									<img key={uuidv4()} src={programmer} alt={post.category} />
								) : (
									<img key={uuidv4()} src={question} alt={post.category} />
								)}
							</CategoryMark>
							{/* Category matching logo on each card END*/}
							<Content>
								<Box>
									<H2>
										<mark>{post.title}</mark>
									</H2>
									<Date>
										<div>
											<mark>Created: {post.createdTimestamp?.toDate().toDateString()}</mark>
										</div>
										<div>
											{/* This checks if the created date === edited date. If so it won't display the edited date */}
											{post.lastUpdatedTimestamp ? (
												post.createdTimestamp.toDate().toDateString() ===
												post.lastUpdatedTimestamp.toDate().toDateString() ? null : (
													<mark>Edited: {post.lastUpdatedTimestamp.toDate().toDateString()}</mark>
												)
											) : null}
										</div>
									</Date>
								</Box>
								<Description>
									<mark>{excerpt(post.description, 120)}</mark>
								</Description>
								<TagBox>
									<Tags tags={post.tags} />
								</TagBox>
							</Content>
						</StyledCard>
					</Link>

					{/* Delete & Edit button */}
					{userId && post.userId === userId && (
						<IconContainer style={{ float: 'right' }}>
							<FontAwesomeIcon
								icon={faTrash}
								id='trash'
								style={{
									cursor: 'pointer',
									paddingRight: '10px',
									textDecoration: 'none',
								}}
								size='2x'
								aria-label={post.id}
								onClick={handleDelete(post.id)}
							/>
							<Link
								to={`/update/${post.id}`}
								style={{ cursor: 'pointer', paddingRight: '10px', textDecoration: 'none' }}
							>
								<FontAwesomeIcon
									icon={faEdit}
									id='edit'
									name='edit'
									size='2x'
									aria-label={post.id}
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
