import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../firebase";

const BlogDetails = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	console.log("blog:", blog);

	useEffect(() => {
		id && getBlogDetail();
	}, [id]);

	const getBlogDetail = async () => {
		const docRef = doc(db, "blogPosts", id);
		const blogDetail = await getDoc(docRef);
		setBlog(blogDetail.data());
	};

	const removePost = async () => {};

	return (
		<div className="blog-details">
			{/* {isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>} */}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={removePost}>Delete</button>
				</article>
			)}
		</div>
	);
};
export default BlogDetails;
