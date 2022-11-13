import styled from 'styled-components';

const TagSection = styled.aside`
	p {
		background: #f1f1f1;
		padding: 5px 10px;
		color: #222;
		margin: 3px;
		font-size: 1rem;
		display: inline-block;
		border-radius: 10px;
	}

	p:hover {
		opacity: 0.9;
		transition: 0.5s;
		transform: scale(0.98);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
		background: linear-gradient(45deg, #3776d3, #55c1ff);
		color: white;
	}
`;

export default TagSection;
