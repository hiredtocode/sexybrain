import { v4 as uuidv4 } from 'uuid';
import angular from '../assets/img/angular.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import css from '../assets/img/css3.svg';
import firebase from '../assets/img/firebase-icon.svg';
import html from '../assets/img/html.svg';
import javascript from '../assets/img/javascript.svg';
import materialUi from '../assets/img/material-ui.svg';
import programmer from '../assets/img/programmer.svg';
import question from '../assets/img/question.svg';
import react from '../assets/img/react.svg';
import sass from '../assets/img/sass.svg';
import styledComponents from '../assets/img/styledComponentsLogo.svg';
import tailwindcss from '../assets/img/tailwindcss.svg';
import typescript from '../assets/img/typescript.svg';
import wordpress from '../assets/img/wordpress.svg';
import { Categories } from './styles/Categories.styled';
import CategoryButton from './styles/CategoryButton.styled';

const CategoryList = props => {
	const { categories, handleSelectCategory } = props;
	return (
		<Categories>
			{categories?.map(category => {
				switch (category) {
					case 'JavaScript':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={javascript} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'TypeScript':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={typescript} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'React':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={react} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Angular':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={angular} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'CSS':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={css} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'HTML':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={html} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'SASS':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={sass} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Bootstrap':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={bootstrap} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Material UI':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={materialUi} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Tailwind CSS':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={tailwindcss} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Styled Components':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={styledComponents} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Today I learned':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={programmer} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Firebase':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={firebase} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					case 'Wordpress':
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={wordpress} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
					default:
						return (
							<CategoryButton
								key={uuidv4()}
								onClick={handleSelectCategory(category)}
							>
								<img src={question} alt={category} />
								<span>{category}</span>
							</CategoryButton>
						);
				}
			})}
		</Categories>
	);
};

export default CategoryList;
