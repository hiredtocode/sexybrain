import styled from 'styled-components/macro';

export const DivContainer = styled.div`
	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary};
		}
		70% {
			box-shadow: 0 0 0 10px rgba(100, 255, 218, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
		}
	}

	ul li:hover {
		&:hover {
			color: ${({ theme }) => theme.colors.heading};
			border: 1px solid ${({ theme }) => theme.colors.primary};

			cursor: pointer;
		}
	}

	ul li.pressed {
		margin-left: 15px;
		display: flex;
		color: ${({ theme }) => theme.colors.font};
		height: 100px;
		padding: 15px 50px;
		align-items: center;
		height: 30px;
		max-height: 40px;
		justify-content: center;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
		font-size: 1.1rem;
		background-color: ${({ theme }) => theme.colors.card};
		animation: pulse 1.5s infinite;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
		flex-direction: row;

		display: flex;
		flex-wrap: wrap;
		align-items: center;

		ul li.pressed {
			display: flex;
			color: ${({ theme }) => theme.colors.font};
			height: 20px;
		}
		ul li {
			padding: 15px 15px;
		}
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
		min-width: 180px;
	}
`;
