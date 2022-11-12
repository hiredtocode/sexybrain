import { StyledCard } from './styles/Card.styled.js';
import { Link } from 'react-router-dom';
import { excerpt } from '../utility';
import Button from './styles/Button.styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles/Container.styled.js';

export default function Card({ blogs, user, handleDelete }) {
	const userId = user?.uid;

	return (
		<>
			{blogs?.map((item, index) => (
				<StyledCard key={index}>
					<div>
						<img src={item.imgUrl} alt={item.title} />
					</div>
					<div>
						<h4>{item.category}</h4>
						<h2>{item.title}</h2>

						<span>
							<p>By: {item.author}</p> -&nbsp;
							{item.timestamp.toDate().toDateString()}
						</span>
						<div>{excerpt(item.body, 120)}</div>
						<Link to={`/detail/${item.id}`}>
							<Button>Read More</Button>
						</Link>
						{userId && item.userId === userId && (
							<div style={{ float: 'right' }}>
								<FontAwesomeIcon
									icon={faTrash}
									style={{ cursor: 'pointer' }}
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
							</div>
						)}
					</div>
				</StyledCard>
			))}
		</>
	);
}
