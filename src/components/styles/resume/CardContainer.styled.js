import styled from 'styled-components/macro';

export const CardContainer = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	padding: 40px 0;
`;

export const Border = styled.div`
	position: relative;
	min-width: 250px;
	min-height: 350px;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	margin: 10px;
`;

export const Card = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
	background: ${({ theme }) => theme.colors.card};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: baseline;

	&:hover {
		transform: translateY(-30px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		transition: 0.5s;

		background: linear-gradient(
			45deg,
			${({ theme }) => theme.colors.hover},
			${({ theme }) => theme.colors.hovered}
		);
	}
`;
export const Content1 = styled.div`
	padding-bottom: 30px;
	display: flex;
	flex-direction: column;

	p {
		font-size: 1.2rem;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.font};
		margin: 10px auto;
		z-index: 1;
	}
`;
export const Content2 = styled.div`
	padding-bottom: 30px;
	text-align: center;
	display: flex;
	flex-direction: column;

	p {
		font-size: 1.2rem;
		font-weight: 500;
		text-align: center;
		color: ${({ theme }) => theme.colors.font};
		margin: 10px auto;
		z-index: 1;
	}
	h3 {
		position: relative;
		text-align: center;
		font-size: 1.3em;
		color: ${({ theme }) => theme.colors.font};
		z-index: 1;
		font-weight: 600;
	}
`;
