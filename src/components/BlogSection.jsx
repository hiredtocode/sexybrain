import React from 'react';
import { Link } from 'react-router-dom';
import { excerpt } from '../utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const BlogSection = ({ blogs, user, handleDelete }) => {
	const userId = user?.uid;
	return (
		<div>
			<div className=''>Daily Blogs</div>
			{blogs?.map((item) => (
				<div className=' ' key={item.id}>
					<div className=''>
						<div className=''>
							<div className=''>
								<img src={item.imgUrl} alt={item.title} />
							</div>
						</div>
					</div>
					<div className=''>
						<div className=''>
							<h6 className=''>{item.category}</h6>
							<span className=''>{item.title}</span>
							<span className=''>
								<p className=''>{item.author}</p> -&nbsp;
								{item.timestamp.toDate().toDateString()}
							</span>
						</div>
						<div className=''>{excerpt(item.body, 120)}</div>
						<Link to={`/detail/${item.id}`}>
							<button className=''>Read More</button>
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
				</div>
			))}
		</div>
	);
};

export default BlogSection;
