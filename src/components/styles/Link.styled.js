import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
	color: ${({ theme }) => theme.colors.font};

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.colors.accent};
	}
`;
