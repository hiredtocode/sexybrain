const initialState = {
	mode: 'en',
}

function languageButtonReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_ENGLISH_LANGUAGE':
			return {
				...state,
				mode: 'en',
			}
		case 'SET_KOREAN_LANGUAGE':
			return {
				...state,
				mode: 'kr',
			}
		default:
			return state
	}
}

export default languageButtonReducer
