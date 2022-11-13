import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	justify-content: ${({ justify }) => justify};
	align-items: ${({ align }) => align};
	margin: 0 10px;
`;

export default Flex;
