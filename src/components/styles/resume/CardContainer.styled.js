import styled from 'styled-components';

export const CardContainer = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	padding: 40px 0;

	.border .card {
		position: absolute;
		top: 20px;
		left: 20px;
		right: 20px;
		bottom: 20px;
		background: ${({ theme }) => theme.colors.card};
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: baseline;
	}

	.border:hover .card {
		transform: translateY(-30px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

		background: linear-gradient(
			45deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
	}

	.border:hover .card .content h3,
	.border:hover .card .content p {
		color: ${({ theme }) => theme.colors.font};
	}

	.border .card .content {
		display: flex;
		flex-direction: column;
	}

	.border .card .content h3 {
		position: relative;
		text-align: center;
		font-size: 1.3em;
		color: ${({ theme }) => theme.colors.font};
		z-index: 1;
		font-weight: 600;
	}

	.border .card .content p {
		font-size: 1.2rem;
		font-weight: 500;
		text-align: center;
		color: ${({ theme }) => theme.colors.font};
		margin: 10px auto;
		z-index: 1;
	}
`;
