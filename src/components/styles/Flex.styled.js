import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	flex-grow: ${({ grow }) => grow};
	flex-direction: ${({ direction }) => direction};
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
	margin-top: ${({ margin }) => margin};
	margin-right: ${({ margin }) => margin};
	margin-bottom: ${({ margin }) => margin};
	margin-left: ${({ margin }) => margin};

	h3 {
		font-weight: bold;
	}
`;

export default Flex;
