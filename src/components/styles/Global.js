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
  background: ${({ theme }) => theme.colors.body}
}

p{
  opacity: 0.6;
  line-height: 1.5;

}

img {
  max-width: 100%;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

`;
export default GlobalStyles;
