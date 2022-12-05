import { useState, useEffect } from 'react';
import { FilterContainer } from './styles/portfolio/ProjectContainer.styled';
import Projects from '../projects/projects.json';
import { v4 as uuidv4 } from 'uuid';

const CategoryList = () => {
	const [projects, setProjects] = useState(Projects);
	const [categories, setCategories] = useState();
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
	useEffect(() => {
		const categories = () => {
			let array = [];
			projects.forEach((project) => {
				array.push(...project.stack);
			});
			const uniqueCategories = [...new Set(array.map((stack) => stack))];
			setCategories(uniqueCategories);
			setLoading(false);
		};

		categories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<FilterContainer>
			<ul>{categories && categories.map((category) => <li key={uuidv4()}>{category}</li>)}</ul>
		</FilterContainer>
	);
};

export default CategoryList;
