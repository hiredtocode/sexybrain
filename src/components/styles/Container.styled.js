import styled from 'styled-components';

export const ResumeContainer = styled.div`
	display: flex;
	max-width: 1200px;
	justify-content: space-between;
	align-items: center;
	transition: 0.6s;
	padding: 150px 50px;
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
export const Container = styled.div`
	display: flex;
	max-width: 1200px;
	justify-content: space-between;
	align-items: center;
	transition: 0.6s;
	padding: 100px 50px;
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
