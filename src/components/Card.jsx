import { Link } from 'react-router-dom';
import { excerpt } from '../utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSignIn } from '@fortawesome/free-solid-svg-icons';
import {
	StyledCard,
	Description,
	Category,
	CategoryContainer,
	Date,
	Body,
	IconContainer,
	CardContainer,
} from './styles/Card.styled.js';
import Flex from './styles/Flex.styled.js';
import Tags from '../components/Tags';

export default function Card({ blogs, user, handleDelete }) {
	const userId = user?.uid;

	return (
		<>
			{blogs?.map((item, index) => (
				<CardContainer key={index}>
					<Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
						<StyledCard>
							<Description>
								<CategoryContainer>
									<Category>
										<h4>{item.category}</h4>
									</Category>
								</CategoryContainer>
								<Flex justify={'space-between'} align={'center'}>
									<h2>{item.title}</h2>
									<Date>
										<span>{item.timestamp.toDate().toDateString()}</span>
									</Date>
								</Flex>
								<Body>{excerpt(item.body, 120)}</Body>
								<Tags tags={item.tags} />
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
