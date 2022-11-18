import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Quicksand', 'sans-serif';
}

p{
	font-size: 1.2em;
}

img {
  max-width: 100%;
}
svg {
  width: 1.5rem;
}

`;
export default GlobalStyles;
