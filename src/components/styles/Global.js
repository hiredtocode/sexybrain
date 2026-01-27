import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

* {
  box-sizing: border-box;
	font-family: 'Quicksand', 'Noto Sans KR', sans-serif;

	/* Firefox scrollbar */
  scrollbar-color: ${({ theme }) => theme.colors.primaryBackground} ${({
	theme,
}) => theme.colors.body};
  scrollbar-width: thin;
	/* Firefox scrollbar END */

	transition: 0.5s;

}

/* @media (prefers-color-scheme: dark){
	body{
		${({ theme }) => theme.colors.body}
	}
} */

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
a:link,
	a:active {
		color: ${({ theme }) => theme.colors.secondary};
		background-color: transparent;
		text-decoration: none;
	}

	a:visited,
	a:hover {
		color: ${({ theme }) => theme.colors.primary};
		background-color: transparent;
		text-decoration: none;
	}
p{
	font-size: 1.2em;

	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		font-size: 1rem;
	}

	}

	li{
		font-size: 1.2rem;

		/* s: '767.98px'  */
		@media (max-width: ${({ theme }) => theme.s}) {
			font-size: 1rem;
		}

}

img {
  max-width: 100%;
}
svg {
  width: 1.5rem;
}
mark {
	border-radius: 5px;
	padding: 0 10px;
}
button{
	/* box-shadow: 0 0 5px rgba(0, 0, 0, 0.15); */

}

::selection {
		background: ${({ theme }) => theme.colors.highlight};
	color: ${({ theme }) => theme.colors.heading}
	}


`

export default GlobalStyles
