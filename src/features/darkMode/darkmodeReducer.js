const initialState = {
	mode: 'dark',
};

function darkmodeReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_DARK_MODE':
			return {
				...state,
				mode: 'dark',
			};
		case 'SET_LIGHT_MODE':
			return {
				...state,
				mode: 'light',
			};
		default:
			return state;
	}
}

export default darkmodeReducer;
