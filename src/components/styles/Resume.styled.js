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
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 5px 14px;
	min-width: 100px;
	max-height: 40px;
	box-sizing: border-box;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	font-size: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.lineBreak};

	/* xs: '575.98px' */
	@media (max-width: ${({ theme }) => theme.xs}) {
		padding: 8px 12px;
		min-width: 80px;
	}
	/* s: '767.98px'  */
	@media (max-width: ${({ theme }) => theme.s}) {
		padding: 8px 12px;
		min-width: 80px;
	}

	img {
		width: 28px;
		min-width: 28px;
		max-width: 35px;
		max-height: 28px;
		height: auto;
		object-fit: contain;
		flex-shrink: 0;

		/* xs: '575.98px' */
		@media (max-width: ${({ theme }) => theme.xs}) {
			padding: 0;
			max-width: 28px;
			max-height: 24px;
		}
		/* s: '767.98px'  */
		@media (max-width: ${({ theme }) => theme.s}) {
			padding: 0;
			max-width: 28px;
			max-height: 24px;
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

/** Tools section: responsive grid of modern cards */
export const ToolsCardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1.25rem;
	width: 100%;
	max-width: 100%;
	margin-top: 0.5rem;
	margin-bottom: 1rem;

	@media (min-width: 600px) {
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	}
`

/** Single Tools card – clean layout, no text overflow */
export const ToolsCard = styled.article`
	background: ${({ theme }) => theme.colors.card};
	border-radius: 12px;
	padding: 1.25rem 1rem;
	min-width: 0;
	overflow: hidden;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
	border: 1px solid ${({ theme }) => theme.colors.lineBreak};
	border-top: 3px solid ${({ theme }) => theme.colors.primary};
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
		border-color: ${({ theme }) => theme.colors.subText};
	}
`

export const ToolsCardTitle = styled.h3`
	font-size: 1rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.heading};
	margin: 0 0 0.75rem 0;
	text-align: center;
	letter-spacing: 0.02em;
`

export const ToolsCardList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.35rem 0.5rem;
	justify-content: center;
	align-items: center;
	min-width: 0;

	p {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.font};
		background: ${({ theme }) => theme.colors.body};
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		overflow-wrap: break-word;
		word-break: break-word;
		max-width: 100%;
		line-height: 1.35;
		border: 1px solid ${({ theme }) => theme.colors.lineBreak};
	}
`
