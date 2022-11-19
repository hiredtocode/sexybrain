import styled from 'styled-components';

export const CardContainer = styled.div`
	position: relative;
	min-width: 100%;
`;
export const StyledCard = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.card};
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	margin: 10px 0;
	padding: 15px;
	transition: 0.8s;

	&:hover {
		transition: 0.5s;
		transform: translateY(-5px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		img {
			opacity: 0.6;
			transition: 0.7s;
		}
	}
`;

export const Description = styled.div`
	justify-content: space-between;
	min-width: 100%;
	font-size: 1.15rem;
	color: ${({ theme }) => theme.colors.font};
`;

export const Date = styled.div`
	align-items: center;
	padding-right: 25px;
`;
export const Body = styled.div`
	padding-bottom: 20px;
`;
export const IconContainer = styled.div`
	position: absolute;
	bottom: 35px;
	right: 20px;
	z-index: 5;
`;
export const CategoryMark = styled.div`
	position: relative;
	img {
		position: absolute;
		height: 240px;
		top: -35px;
		left: -30px;
		opacity: 0.4;
		transform: rotate(-15deg);
		z-index: 0;
	}
`;
