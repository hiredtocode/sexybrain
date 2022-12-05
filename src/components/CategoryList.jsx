import { useState, useEffect } from 'react';
import { FilterContainer } from './styles/portfolio/ProjectContainer.styled';
import Projects from '../projects/projects.json';

const CategoryList = () => {
	const [projects, setProjects] = useState(Projects);
	const [category, setCategory] = useState();
	const [loading, setLoading] = useState(true);

	// Show posts that are only related to the clicked category when clicked
	// const handleClick = (selectedCategory) => {
	// 	return () => {
	// 		// const result = projects.filter((project) => {
	// 		const stack = projects.map((project) => {
	// 			return console.log('project.stack:', project.stack);
	// 		});
	// 		console.log('stack:', stack);
	// 		console.log('selectedCategory:', selectedCategory);
	// 		return projects.stack === selectedCategory;
	// 		// });
	// 		// setProjects(result);
	// 	};
	// };
	console.log('projects:', projects);
	useEffect(() => {
		const categories = () => {
			console.log('UseEffect started:');
			let array = [];
			projects.forEach((project) => {
				array.push(...project.stack);
			});
			const uniqueCategories = [...new Set(array.map((stack) => stack))];
			setCategory(uniqueCategories);
			setLoading(false);
			console.log('Ending useEffect');
		};

		return () => categories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log('projects.stack:', projects.stack);
	return <FilterContainer>{projects.map((project) => project.stack)}</FilterContainer>;
};

export default CategoryList;
