import React, { useState, useEffect } from 'react';
import Flex from '../components/styles/Flex.styled.js';
import { H1 } from '../components/styles/Title.styled';

const Portfolio = () => {
	return (
		<main>
			<Flex direction='column'>
				<H1>Projects.</H1>
				<nav>
					<Flex direction='row'>
						<div>All</div>
						<div>React</div>
						<div>Angular</div>
						<div>Wordpress</div>
						<div>Open Source</div>
					</Flex>
				</nav>
				<section>
					<ul>
						<li>Current Website</li>
						<li>API - Angular</li>
						<li>Nama Sushi</li>
						<li>VS Code Theme</li>
					</ul>
				</section>
			</Flex>
		</main>
	);
};
export default Portfolio;
