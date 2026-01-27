import styled from 'styled-components/macro'

export const Stack = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: nowrap;
	max-width: 100%;
	margin-bottom: 15px;
	align-items: center;
	gap: 0;

	span {
		margin-right: 15px;
		flex-shrink: 0;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		margin-left: 0;
		padding-left: 0;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		margin-left: 0;
	}
`

export const StackBadges = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 1 1 0;
	min-width: 0;
	gap: 6px;
	align-items: center;
`

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	padding-left: 20px;

	ul > li {
		margin-left: 30px;
	}

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding-left: 0;
		margin-left: 0;
		
		ul {
			padding-left: 15px;
			margin-left: 0;
		}
		ul > li {
			margin-left: 0;
		}
		ul ul {
			padding-left: 15px;
		}
		ul ul > li {
			margin-left: 0;
		}
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding-left: 0;
		
		ul {
			padding-left: 20px;
			margin-left: 0;
		}
		ul > li {
			margin-left: 0;
		}
		ul ul {
			padding-left: 15px;
		}
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`

export const ProfilePic = styled.section`
	img {
		position: absolute;
		min-width: 50px;
		max-width: 100px;
		margin-right: 1em;
		position: absolute;
		inset: 2.5px;
		border-radius: 10px;
		z-index: 9999;
	}

	.box {
		position: relative;
		width: 105px;
		height: 135px;
		background: rgba(0, 0, 0, 0.007);
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	/* .box-cover::after {
		content: '';
		position: absolute;
		width: 99px;
		height: 129px;
		margin-right: 1em;
		position: absolute;
		inset: 3px;
		background-color: white;
		border-radius: 10px;
		z-index: 2;
	}

	.box::after {
		content: '';
		position: absolute;
		width: 500px;
		height: 500px;
		background-image: conic-gradient(transparent, transparent, transparent, #0084ff);
		animation: animate 6s linear infinite;
		animation-delay: -3s;
	}
	.box::before {
		content: '';
		position: absolute;
		width: 500px;
		height: 500px;
		background-image: conic-gradient(transparent, transparent, transparent, #ff5e00);
		animation: animate 6s linear infinite;
	}

	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	} */
`

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

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		p > span {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.subText {
			color: ${({ theme }) => theme.colors.subText};
			padding-left: 0;
			font-size: 1.2rem;
		}
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
	}
	/* md: '991.98px'  */
	@media (max-width: ${({ theme }) => theme.md}) {
	}
	/* lg: '1199.98px'  */
	@media (max-width: ${({ theme }) => theme.lg}) {
	}
`

export const CardContainer = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	padding: 40px 0;
`

export const Border = styled.div`
	position: relative;
	min-width: 250px;
	min-height: 350px;
	border: 1px solid ${({ theme }) => theme.colors.lineBreak};
	border-radius: 10px;
	margin: 10px;

	&:hover {
		transition: 0.4s;
		border: 1px solid ${({ theme }) => theme.colors.subText};
	}
`

export const Card = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
	background: ${({ theme }) => theme.colors.card};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: baseline;

	&:hover {
		transition: 0.4s;

		transform: translateY(-10px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
		color: ${({ theme }) => theme.colors.heading};
	}
`
export const Content1 = styled.div`
	padding-bottom: 30px;
	display: flex;
	flex-direction: column;

	p {
		font-weight: 400;
		color: ${({ theme }) => theme.colors.font};
		margin: 10px 0;
		z-index: 1;
	}
`
export const Content2 = styled.div`
	padding-bottom: 30px;
	text-align: center;
	display: flex;
	flex-direction: column;

	p {
		font-weight: 400;
		text-align: center;
		color: ${({ theme }) => theme.colors.font};
		margin: 10px auto;
		z-index: 1;
	}
	h3 {
		position: relative;
		text-align: center;
		color: ${({ theme }) => theme.colors.font};
		z-index: 1;
		font-weight: 700;
	}
`

export const Badge = styled.div`
	margin: 3px 3px;
	display: flex;
	padding: 5px 10px;
	align-items: center;
	max-height: 40px;
	justify-content: center;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.lineBreak};

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 8px;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 8px;
	}

	img {
		max-width: 35px;
		padding: 0 5px;

		/* xs: '575.98px' */
		@media (max-width: ${({ theme }) => theme.xs}) {
			padding: 0;
			max-width: 28px;
		}
		/* s: '767.98px'  */
		@media (max-width: ${({ theme }) => theme.s}) {
			padding: 0;
			max-width: 28px;
		}
	}
	p {
		color: ${({ theme }) => theme.colors.font};

		padding: 0 4px;

		/* xs: '575.98px' */
		@media (max-width: ${({ theme }) => theme.xs}) {
			display: none;
		}
		/* s: '767.98px'  */
		@media (max-width: ${({ theme }) => theme.s}) {
			display: none;
		}
		/* md: '991.98px'  */
		@media (max-width: ${({ theme }) => theme.md}) {
		}
		/* lg: '1199.98px'  */
		@media (max-width: ${({ theme }) => theme.lg}) {
		}
	}
	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.subText};
	}
	&:hover p {
		color: ${({ theme }) => theme.colors.heading};
	}
`
