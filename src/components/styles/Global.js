import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
	font-family: 'Quicksand', 'sans-serif';
}

body{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-display: swap;
	background: ${({ theme }) => theme.colors.body};
	color: ${({ theme }) => theme.colors.font};
	transition-duration: 1s;
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

button{
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

}

::selection {
		background: ${({ theme }) => theme.colors.highlight};

}
`;
export default GlobalStyles;
