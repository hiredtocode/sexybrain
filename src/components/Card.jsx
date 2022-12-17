import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CategoryMark } from '../components/styles/Card.styled';
import { TagBox } from '../components/styles/TagSection.styled.js';
import { H2 } from '../components/styles/Title.styled.js';
import Tags from '../components/Tags';
import { excerpt } from '../utility/excerpt';
import CategoryToImageMap from './CategoryToImageMap';
import DeletePostButton from './deletePostButton';
import EditPostButton from './editPostButton';
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
			{blogs?.map(post => (
				<CardContainer key={uuidv4()}>
					<Link
						to={`/detail/${post.id}`}
						style={{ textDecoration: 'none', color: { fontColor } }}
					>
						<StyledCard>
							{/* Category matching logo on each card */}
							<CategoryMark>
								<img
									key={uuidv4()}
									src={CategoryToImageMap[post.category]}
									alt={post.category}
								/>
							</CategoryMark>
							{/* Category matching logo on each card END*/}
							<Content>
								<Box>
									<H2>
										<mark>{post.title}</mark>
									</H2>
									<Date>
										<div>
											<mark>
												Created:{' '}
												{post.createdTimestamp?.toDate().toDateString()}
											</mark>
										</div>
										<div>
											{/* This checks if the created date === edited date. If so it won't display the edited date */}
											{post.lastUpdatedTimestamp ? (
												post.createdTimestamp.toDate().toDateString() ===
												post.lastUpdatedTimestamp
													.toDate()
													.toDateString() ? null : (
													<mark>
														Edited:{' '}
														{post.lastUpdatedTimestamp.toDate().toDateString()}
													</mark>
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

					{/* Delete & Edit post button */}
					{userId && post.userId === userId && (
						<IconContainer style={{ float: 'right' }}>
							<DeletePostButton handleDelete={handleDelete(post.id)} />
							<EditPostButton post={post} />
						</IconContainer>
					)}
					{/* Delete & Edit button END*/}
				</CardContainer>
			))}
		</>
	);
}
