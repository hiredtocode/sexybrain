import { useEffect, useState } from "react";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const useFetch = (url) => {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const blogCollectionRef = collection(db, "blogPosts");

	useEffect(() => {
		onSnapshot(blogCollectionRef, (snapshot) => {
			setBlogs(
				snapshot.docs.map((doc) => {
					return {
						id: doc.id,

						...doc.data(),
					};
				})
			);
		});
	}, []);
	console.log("blogsId:", blogs.id);
	return { blogs, isLoading, error };
};

export default useFetch;
