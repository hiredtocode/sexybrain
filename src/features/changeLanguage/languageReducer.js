import { setDefaultLanguage } from '../../languages/languageDetector.js'

const defaultLanguage = setDefaultLanguage()

const initialState = {
	language: defaultLanguage === 'en' ? 'ko' : 'en',
}

function languageButtonReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_ENGLISH_LANGUAGE':
			return {
				...state,
				language: 'ko',
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
