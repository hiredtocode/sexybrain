import styled from 'styled-components';

export const Contact = styled.section`
	margin-left: 20px;

	p {
		padding-left: 20px;
	}
	.subText {
		color: ${({ theme }) => theme.colors.subText};
		padding-left: 15px;
		font-size: 1.2rem;
	}
`;
