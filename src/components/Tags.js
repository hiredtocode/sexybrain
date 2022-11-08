import { useState, useRef } from "react";
import "./Tags.scss";

const TagComponent = (props) => {
	return (
		<div className="tagComponent">
			<div className="tagComponent__text">{props.text}</div>
			<div
				className="tagComponent__close"
				onClick={() => {
					props.cullTagFromTags(props.text);
				}}
			>
				X
			</div>
		</div>
	);
};

export const TagInput = (props) => {
	const [tags, setTags] = useState(["JavaScript", "TypeScript"]);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef();

	const inputValueChangeHandler = (inputValue) => {
		setInputValue(inputValue);

		if (inputValue[inputValue.length - 1] === ",") {
			setTags([...tags, inputValue.slice(0, inputValue.length - 1)]);
			setInputValue("");
		}
	};
	const cullTagFromTags = (tag) => {
		setTags([...tags.filter((element) => element !== tag)]);
	};

	return (
		<div className="tagArea">
			<div className="tagArea__displayArea">
				{tags.map((tag) => (
					<TagComponent text={tag} cullTagFromTags={cullTagFromTags} />
				))}
			</div>
			<input
				type="text"
				ref={inputRef}
				value={inputValue}
				onChange={(e) => inputValueChangeHandler(e.target.value)}
				placeholder="separated by commas"
				className="tagArea__input"
			/>
		</div>
	);
};
