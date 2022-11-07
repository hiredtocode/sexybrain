import BlogList from "./BlogList";
import db from "../firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import useFetch from "../services/useFetch";

function Home() {
	const { blogs, isLoading, error, id } = useFetch();
	console.log("id:", id);
	console.log("blogs:", blogs);
	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="Awesome Blog!" />}
		</div>
	);
}

export default Home;
