import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
	font-family: 'Quicksand', 'sans-serif';

	/* Firefox scrollbar */
  scrollbar-color: ${({ theme }) => theme.colors.primaryBackground} ${({ theme }) =>
	theme.colors.body};
  scrollbar-width: thin;
	/* Firefox scrollbar END */
}

/* Chrome, Edge, Safari */
*::-webkit-scrollbar {
	width: 12px; /* vertical scrollbar */
	height: 12px; /* horizontal scrollbar */
}

*::-webkit-scrollbar-track {
	background:transparent;
}

*::-webkit-scrollbar-thumb {
	background: ${({ theme }) => theme.colors.primaryBackground};
	border-radius: 12px;
	border: calc(12px / 4) solid ${({ theme }) => theme.colors.body};
}

*::-webkit-scrollbar-thumb:hover {
	background: ${({ theme }) => theme.colors.underline};
}
/* Chrome, Edge, Safari */

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

	.active button{
		background-color: ${({ theme }) => theme.colors.primaryBackground};
		color: ${({ theme }) => theme.colors.font};
	}
`;

export default GlobalStyles;
