import styled from 'styled-components';

export const ProfilePic = styled.section`
	img {
		position: absolute;
		min-width: 50px;
		max-width: 100px;
		margin-right: 1em;
		position: absolute;
		inset: 2.5px;
		border-radius: 16px;
		z-index: 11313;
	}

	.box {
		position: relative;
		width: 105px;
		height: 135px;
		background: rgba(0, 0, 0, 0.007);
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.box-cover::after {
		content: '';
		position: absolute;
		width: 99px;
		height: 129px;
		margin-right: 1em;
		position: absolute;
		inset: 3px;
		background-color: white;
		border-radius: 16px;
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
`;
