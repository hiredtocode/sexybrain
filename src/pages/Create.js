import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase";

const Create = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [form, setForm] = useState({
		title: "",
		body: "",
		author: "",
	});

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
			author: "",
		});
	};

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					value={form.title}
					onChange={(e) => setForm({ ...form, title: e.target.value })}
					required
				/>
				<label>Blog body:</label>
				<textarea
					value={form.body}
					onChange={(e) => setForm({ ...form, body: e.target.value })}
					required
				/>
				<label>Blog author:</label>
				<input
					value={form.author}
					onChange={(e) => setForm({ ...form, author: e.target.value })}
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
