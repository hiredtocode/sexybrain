import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isLoading, setIsLoading] = useState(false);
	const history = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const blog = { title, body, author };

		setIsLoading(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("new blog added");
			setIsLoading(false);
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
				<label>Blog body:</label>
				<textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
				<label>Blog author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>

				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default Create;
