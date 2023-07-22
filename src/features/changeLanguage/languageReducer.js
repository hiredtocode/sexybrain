const initialState = {
	language: 'kr',
}

function languageButtonReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_ENGLISH_LANGUAGE':
			return {
				...state,
				language: 'kr',
			}
		case 'SET_KOREAN_LANGUAGE':
			return {
				...state,
				language: 'en',
			}
		default:
			return state
	}
}

export default languageButtonReducer
