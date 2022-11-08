import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";

const Create = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [form, setForm] = useState({
		title: "",
		body: "",
		category: "",
		tags: "",
	});

	const { title, tags, category, body } = form;
	const recipesCollectionRef = collection(db, "blogPosts");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!form.title || !form.body || !form.author) {
			alert("Please fill out all fields");
			return;
		}

		addDoc(recipesCollectionRef, form);

		setForm({
			title: "",
			body: "",
			category: "",
			tags: [],
		});
	};

	const categoryOption = [
		"JavaScript",
		"TypeScript",
		"React",
		"Angular",
		"CSS",
		"HTML",
		"SASS",
		"Bootstrap",
		"Material UI",
		"Tailwind CSS",
		"Styled Components",
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
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input type="text" value={form.title} onChange={onTitleChange} required />
				<label>Blog body:</label>
				<textarea value={form.body} onChange={onBodyChange} required />
				<div className="category">
					<select value={category} onChange={onCategoryChange} className="catg-dropdown">
						<option>Please select category</option>
						{categoryOption.map((option, index) => (
							<option value={option || ""} key={index}>
								{option}
							</option>
						))}
					</select>
				</div>
				<label>Tag:</label>
				<input
					value={form.tags}
					onChange={(e) => setForm({ ...form, tags: e.target.value })}
					type="text"
					required
				/>

				{!isLoading && <button type="submit">Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default Create;
