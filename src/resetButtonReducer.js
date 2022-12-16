const initialState = {
	resetButtonPressed: false,
};

function resetButtonReducer(state = initialState, action) {
	switch (action.type) {
		case 'BUTTON_PRESSED':
			return {
				...state,
				resetButtonPressed: true,
			};
		case 'BUTTON_RELEASED':
			return {
				...state,
				resetButtonPressed: false,
			};
		default:
			return state;
	}
}

export default resetButtonReducer;
