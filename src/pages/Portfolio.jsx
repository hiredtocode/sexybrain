import React, { useState, useEffect } from 'react';
import Flex from '../components/styles/Flex.styled.js';
import { H1 } from '../components/styles/Title.styled';
import { Button } from '../components/styles/Button.styled.js';
import { ProjectContainer } from '../components/styles/portfolio/ProjectContainer.styled.js';
import Project from '../components/Projects.jsx';

const Portfolio = () => {
	return (
		<main style={{ width: '100%' }}>
			<Flex direction='column'>
				<H1>Projects.</H1>
				<nav>
					<Flex direction='row' justify='center' alignItems='center' style={{ width: '100%' }}>
						<Button>All</Button>
						<Button>React</Button>
						<Button>Angular</Button>
						<Button>Wordpress</Button>
						<Button>Open Source</Button>
					</Flex>
				</nav>
				<ProjectContainer>
					<Project />
				</ProjectContainer>
			</Flex>
		</main>
	);
};
export default Portfolio;
