import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const LinkStyled = styled(Link)`
	color: ${({ theme }) => theme.colors.font};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.colors.accent};
	}
`;
