import styled from 'styled-components';

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	margin: 15px 0;
	padding: 15px;

	img {
		width: 50%;
	}

	&:hover {
		transition: all 0.5s ease;
		transform: translateY(-5px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
	}
`;

export const Description = styled.div`
	justify-content: space-between;
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
