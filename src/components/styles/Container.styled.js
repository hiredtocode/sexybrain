import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	max-width: 1200px;
	justify-content: space-between;
	align-items: flex-start;
	padding: 130px 30px;
	transition: 0.6s;
	margin: 0 auto;

	@media (max-width: ${({ theme }) => theme.xs}) {
	}
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	@media (max-width: ${({ theme }) => theme.lg}) {
		padding: 100px 30px;
	} ;
`;
