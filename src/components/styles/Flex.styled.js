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
	flex-wrap: ${({ wrap }) => wrap};

	h3 {
		font-weight: bold;
	}

	/*	xs: '575.98px'*/
	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	} ;
`;

export default Flex;
