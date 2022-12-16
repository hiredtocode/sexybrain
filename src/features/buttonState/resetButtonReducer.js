const initialState = {
	buttonPressed: false,
};

function resetButtonReducer(state = initialState, action) {
	switch (action.type) {
		case 'BUTTON_PRESSED':
			return {
				...state,
				buttonPressed: true,
			};
		case 'BUTTON_RELEASED':
			return {
				...state,
				buttonPressed: false,
			};
		default:
			return state;
	}
}

export default resetButtonReducer;
