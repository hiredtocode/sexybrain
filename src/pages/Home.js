import BlogList from "./BlogList";
import db from "../firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
// import useFetch from "./useFetch";

function Home() {
	const [blogs, setBlogs] = useState([]);

	const blogCollectionRef = collection(db, "blogPosts");

	useEffect(() => {
		onSnapshot(blogCollectionRef, (snapshot) => {
			setBlogs(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,
						viewing: false,
						...doc.data(),
					};
				})
			);
		});
	}, []);
	return (
		<div className="home">
			{/* {error && <div>{error}</div>} */}
			{/* {isLoading && <div>Loading...</div>} */}
			{blogs && <BlogList blogs={blogs} title="Awesome Blog!" />}
		</div>
	);
}

export default Home;
