import styled from 'styled-components';

const TagSection = styled.aside`
	padding: 0 15px;

	p {
		background: #f1f1f1;
		padding: 10px 15px;
		color: #222;
		@include transition(0.5s);
		margin-right: 8px;
		margin-top: 5px;
		margin-bottom: 5px;
		display: inline-block;
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
