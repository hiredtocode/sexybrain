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

				{!isLoading && <button type='submit'>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default Create;
