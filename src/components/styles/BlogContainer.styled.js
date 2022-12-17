import styled from 'styled-components/macro';

export const BlogContainer = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1 1 70%;

	p span {
		margin-left: 20px;
		border-radius: 5px;
		color: ${({ theme }) => theme.colors.primary};
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		flex: 1 1 100%;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		flex: 1 1 90%;
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}

	.selected {
		display: flex;
		align-items: center;
	}
	img {
		height: 20px;
	}
	.cancel {
		margin-left: 10px;
		background-color: transparent;
		border: none;
		padding-top: 3px;
		border-radius: 3px;

		animation: pulse 1s infinite;

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
	}
	span,
	button:hover {
		cursor: pointer;
	}
`;
