const initialState = {
	mode: 'dark',
};

function darkmodeReducer(state = initialState, action) {
	console.log('state from reducer:', state);
	console.log('action:', action);

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
