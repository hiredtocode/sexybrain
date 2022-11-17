import styled from 'styled-components';

export const CardContainer = styled.div`
	position: relative;
	min-width: 100%;
`;
export const StyledCard = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	margin: 15px 0;
	padding: 15px;

	&:hover {
		transition: all 0.5s ease;
		transform: translateY(-5px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
	}
`;

export const Description = styled.div`
	justify-content: space-between;
	min-width: 100%;
	padding-left: 50px;
`;

export const Category = styled.div`
	border-radius: 15px;
	border: none;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
	font-size: 1rem;
	font-weight: 700;
	padding: 5px 15px;
	height: 30px;
	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ color }) => color || '#333'};
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 0;
	top: -30px;
`;

export const CategoryContainer = styled.div`
	position: relative;

	align-items: center;
`;

export const Date = styled.div`
	align-items: center;
`;
export const Body = styled.div`
	padding-bottom: 20px;
`;
export const IconContainer = styled.div`
	position: absolute;
	bottom: 35px;
	right: 20px;
	z-index: 1000;
`;
export const CategoryMark = styled.div`
	position: relative;
	img {
		position: absolute;
		height: 220px;
		top: -40px;
		left: -30px;
		opacity: 0.2;
		transform: rotate(-15deg);
		z-index: 1;
	}
`;
