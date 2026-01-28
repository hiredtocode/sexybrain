import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import Tags from '../components/Tags'
import { excerpt } from '../utility/excerpt'
import CategoryToImageMap from './CategoryToImageMap'
import DeletePostButton from './deletePostButton'
import EditPostButton from './editPostButton'
import {
	Box,
	CardContainer,
	CategoryMark,
	Content,
	Date,
	Description,
	IconContainer,
	StyledCard,
	TagBox,
} from './styles/Blog.styled'
import { H2 } from './styles/General.styled.js'

export default function Card(props) {
	const { blogs, user, handleDelete, handleSelectTag } = props
	const userId = user?.uid
	const fontColor = `${({ theme }) => theme.colors.font}`

	return (
		<>
			{blogs?.map(post => (
				<CardContainer key={nanoid()}>
					<Link
						to={`/detail/${post.id}`}
						style={{ textDecoration: 'none', color: { fontColor } }}
					>
						<StyledCard>
							{/* Category matching logo on each card */}
							<CategoryMark>
								<img
									key={nanoid()}
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
										<>
											<mark>
												Created:{' '}
												{post.createdTimestamp?.toDate().toDateString()}
											</mark>
										</>
										<>
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
										</>
									</Date>
								</Box>
								<Description>
									<mark>{excerpt(post.description, 120)}</mark>
								</Description>
								<TagBox>
									<Tags
										tags={post.tags}
										handleSelectTag={handleSelectTag}
									/>
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
	)
}
