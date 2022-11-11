import { StyledCard } from './styles/Card.styled.js';
import { Link } from 'react-router-dom';
import { excerpt } from '../utility';
import Button from './styles/Button.styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function Card({ blogs, user, handleDelete }) {
	const userId = user?.uid;

	return (
		<StyledCard>
			{blogs?.map((item, index) => (
				<div key={index}>
					<img src={item.imgUrl} alt={item.title} />

					<h6>{item.category}</h6>
					<span>{item.title}</span>

					<span>
						<p>{item.author}</p> -&nbsp;
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
			))}
		</StyledCard>
	);
}
