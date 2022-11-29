import styled from 'styled-components/macro';

export const LineBreak = styled.div`
	width: 100%;
	height: 1px;
	visibility: visible;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lineBreak};
`;
