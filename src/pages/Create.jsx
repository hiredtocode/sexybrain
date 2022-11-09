import { useState, useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase.config';
import { TagInput } from '../components/Tags';

const Create = () => {
	const recipesCollectionRef = collection(db, 'blogPosts');
	const [isLoading, setIsLoading] = useState(false);
	const [form, setForm] = useState({
		title: '',
		body: '',
		category: '',
		tags: [],
	});

	const [tags, setTags] = useState(['JavaScript', 'TypeScript']);
	const [inputValue, setInputValue] = useState('');
	const inputRef = useRef();

	const inputValueChangeHandler = (inputValue) => {
		setInputValue(inputValue);

		if (inputValue[inputValue.length - 1] === ',') {
			setTags([...tags, inputValue.slice(0, inputValue.length - 1)]);
		}
		setInputValue('');
	};
	console.log('tags from inputValueChangeHandler:', tags);

	const cullTagFromTags = (tag) => {
		setTags([...tags.filter((element) => element !== tag)]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!form.title || !form.body || !form.category) {
			alert('Please fill out all fields');
			return;
		}

		addDoc(recipesCollectionRef, form);

		setForm({
			title: '',
			body: '',
			category: '',
		});
	};

	const categoryOption = [
		'JavaScript',
		'TypeScript',
		'React',
		'Angular',
		'CSS',
		'HTML',
		'SASS',
		'Bootstrap',
		'Material UI',
		'Tailwind CSS',
		'Styled Components',
	];

	const onCategoryChange = (e) => {
		setForm({ ...form, category: e.target.value });
	};
	const onTitleChange = (e) => {
		setForm({ ...form, title: e.target.value });
	};
	const onBodyChange = (e) => {
		setForm({ ...form, body: e.target.value });
	};

	const TagComponent = (props) => {
		return (
			<div className='tagComponent'>
				<div className='tagComponent__text'>{props.tag}</div>
				<div
					className='tagComponent__close'
					onClick={() => {
						props.cullTagFromTags(props.tag);
					}}
				>
					X
				</div>
			</div>
		);
	};
	return (
		<div className='create'>
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input type='text' value={form.title} onChange={onTitleChange} required />
				<label>Blog body:</label>
				<textarea value={form.body} onChange={onBodyChange} required />
				<div className='category'>
					<select value={form.category} onChange={onCategoryChange} className='catg-dropdown'>
						<option>Please select category</option>
						{categoryOption.map((selection, index) => (
							<option value={selection || ''} key={index}>
								{selection}
							</option>
						))}
					</select>
				</div>
				<label>Tag:</label>
				<div className='tagArea'>
					<div className='tagArea__displayArea'>
						{tags.map((tag, index) => (
							<TagComponent tag={tag} key={index} cullTagFromTags={cullTagFromTags} />
						))}
					</div>
					<div>
						<input
							type='text'
							ref={inputRef}
							value={form.tags}
							onChange={(e) => inputValueChangeHandler(e.target.value)}
							placeholder='separated by commas'
							className='tagArea__input'
						/>
					</div>
				</div>

				{!isLoading && <button type='submit'>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default Create;
