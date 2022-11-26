import React, { useState, useEffect } from 'react';
import Flex from '../components/styles/Flex.styled.js';
import { H1, H3 } from '../components/styles/Title.styled';
import { Button } from '../components/styles/Button.styled.js';
import {
	ProjectContainer,
	ProjectCard,
} from '../components/styles/portfolio/ProjectContainer.styled.js';
import SamplePic from '../assets/img/default.jpg';
import { Description } from '../components/styles/Card.styled.js';

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
					<ProjectCard>
						<H3>Current Website</H3>
						<img src={SamplePic} alt='Current Website' />
						<Description>
							Amet cupidatat pariatur proident sunt cillum. Lorem aliquip et labore velit veniam
							sunt cillum dolore. Eu anim officia exercitation dolore. Amet dolor ipsum aliquip
							ullamco dolore laborum elit deserunt laborum excepteur aute consectetur ea anim. Nulla
							ea non sunt nisi sint aute cupidatat fugiat exercitation.
						</Description>
					</ProjectCard>
					<ProjectCard>
						<H3>API - Angular</H3>
						<img src={SamplePic} alt='Current Website' />
						<Description>
							Amet cupidatat pariatur proident sunt cillum. Lorem aliquip et labore velit veniam
							sunt cillum dolore. Eu anim officia exercitation dolore. Amet dolor ipsum aliquip
							ullamco dolore laborum elit deserunt laborum excepteur aute consectetur ea anim. Nulla
							ea non sunt nisi sint aute cupidatat fugiat exercitation.
						</Description>
					</ProjectCard>
					<ProjectCard>
						<H3>Nama Sushi</H3>
						<img src={SamplePic} alt='Current Website' />
						<Description>
							Amet cupidatat pariatur proident sunt cillum. Lorem aliquip et labore velit veniam
							sunt cillum dolore. Eu anim officia exercitation dolore. Amet dolor ipsum aliquip
							ullamco dolore laborum elit deserunt laborum excepteur aute consectetur ea anim. Nulla
							ea non sunt nisi sint aute cupidatat fugiat exercitation.
						</Description>
					</ProjectCard>
					<ProjectCard>
						<H3>VS Code Theme</H3>
						<img src={SamplePic} alt='Current Website' />
						<Description>
							Amet cupidatat pariatur proident sunt cillum. Lorem aliquip et labore velit veniam
							sunt cillum dolore. Eu anim officia exercitation dolore. Amet dolor ipsum aliquip
							ullamco dolore laborum elit deserunt laborum excepteur aute consectetur ea anim. Nulla
							ea non sunt nisi sint aute cupidatat fugiat exercitation.
						</Description>
					</ProjectCard>
				</ProjectContainer>
			</Flex>
		</main>
	);
};
export default Portfolio;
