const initialState = {
	language: 'en',
}

function languageButtonReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_ENGLISH_LANGUAGE':
			return {
				...state,
				language: 'en',
			}
		case 'SET_KOREAN_LANGUAGE':
			return {
				...state,
				language: 'kr',
			}
		default:
			return state
	}
}

export default languageButtonReducer
