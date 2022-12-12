import styled from 'styled-components/macro';

export const Badge = styled.div`
	margin: 3px 3px;
	display: flex;
	padding: 0 10px;
	align-items: center;
	max-height: 40px;
	justify-content: center;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.lineBreak};

	img {
		max-width: 35px;
		padding: 0 5px;
	}
	p {
		color: ${({ theme }) => theme.colors.font};

		padding: 0 4px;
	}
	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.subText};
	}
	&:hover p {
		color: ${({ theme }) => theme.colors.heading};
	}
`;
