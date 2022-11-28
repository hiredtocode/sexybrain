import React from 'react';
import {
	ProjectCard,
	CardContainer,
	ProjectDescription,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import { H3 } from '../components/styles/Title.styled';
import Projects from '../projects/projects.json';

const Project = () => {
	return (
		<>
			{Projects &&
				Projects.map((project) => (
					<CardContainer key={project.id}>
						<ProjectCard>
							<H3>{project.title}</H3>
							<img src={project.image} alt={project.title} />
							<ProjectDescription>
								<p>{project.description}</p>
							</ProjectDescription>
						</ProjectCard>
					</CardContainer>
				))}
		</>
	);
};
export default Project;
