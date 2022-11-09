import { useEffect, useState } from 'react';
import { db } from '../firebase.config';
import { collection, onSnapshot } from 'firebase/firestore';

const useFetch = (url) => {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const blogCollectionRef = collection(db, 'blogPosts');

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
			setIsLoading(false);
		});
		// eslint-disable-next-line
	}, []);
	return { blogs, isLoading, error };
};

export default useFetch;
