import { combineReducers, configureStore } from '@reduxjs/toolkit'
import resetButtonReducer from '../features/buttonState/resetButtonReducer'
import counterReducer from '../features/counter/counterSlice'
import darkmodeReducer from '../features/darkMode/darkmodeReducer'
import languageButtonReducer from '../features/changeLanguage/languageReducer'

const rootReducer = combineReducers({
	resetButton: resetButtonReducer,
	darkmode: darkmodeReducer,
	counter: counterReducer,
	toggleLanguageButton: languageButtonReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
