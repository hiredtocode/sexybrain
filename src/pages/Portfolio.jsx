import React, { useState } from 'react';
import Flex from '../components/styles/Flex.styled.js';
import {
	ProjectContainer,
	FilterContainer,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import Project from '../components/Projects.jsx';

const Portfolio = () => {
	const [filter, setFilter] = useState();

	return (
		<main style={{ width: '100%' }}>
			<Flex direction='column'>
				<Flex direction='row' justify='center' alignItems='center' style={{ width: '100%' }}>
					<nav>
						<FilterContainer>
							<div>All</div>
							<div>React</div>
							<div>Angular</div>
							<div>Wordpress</div>
							<div>Open Source</div>
						</FilterContainer>
					</nav>
					<ProjectContainer>
						<Project />
					</ProjectContainer>
				</Flex>
			</Flex>
		</main>
	);
};
export default Portfolio;
