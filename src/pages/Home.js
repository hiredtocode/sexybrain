import BlogList from "./BlogList";
import useFetch from "../services/useFetch";

function Home() {
	const { blogs, isLoading, error } = useFetch();

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="Awesome Blog!" />}
		</div>
	);
}

export default Home;
