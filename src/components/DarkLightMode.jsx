import { useContext } from 'react';
import { ThemeContext } from '../App';
import { MoonIcon, SunIcon } from '../assets/icons';
import styled from 'styled-components/macro';

const DarkLightMode = () => {
	const { isDark, setIsDark } = useContext(ThemeContext);

	const Container = styled.div`
		border: none;
		cursor: pointer;
		height: 50px;
		width: 50px;
		margin: 0 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;

		/* xs: '575.98px' */
		@media (max-width: ${({ theme }) => theme.xs}) {
		}
		/* s: '767.98px'  */
		@media (max-width: ${({ theme }) => theme.s}) {
			margin-right: 5px;
		}
		/* md: '991.98px'  */
		@media (max-width: ${({ theme }) => theme.md}) {
			padding: 1rem;
		}
		/* lg: '1199.98px'  */
		@media (max-width: ${({ theme }) => theme.lg}) {
		}

		svg {
			fill: ${({ theme }) => theme.colors.primary};
		}

		&:hover svg {
			fill: ${({ theme }) => theme.colors.strongAccent};
		}
	`;
	return (
		<Container onClick={() => setIsDark(!isDark)} aria-label='Light dark mode'>
			{isDark ? <MoonIcon /> : <SunIcon />}
		</Container>
	);
};

export default DarkLightMode;
