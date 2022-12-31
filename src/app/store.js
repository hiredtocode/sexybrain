import { combineReducers, configureStore } from '@reduxjs/toolkit'
import resetButtonReducer from '../features/buttonState/resetButtonReducer'
import counterReducer from '../features/counter/counterSlice'
import darkmodeReducer from '../features/darkMode/darkmodeReducer'

const rootReducer = combineReducers({
	resetButton: resetButtonReducer,
	darkmode: darkmodeReducer,
	counter: counterReducer,
})

let store

if (
	process.env.NODE_ENV === 'production' ||
	!window.__REDUX_DEVTOOLS_EXTENSION__
) {
	store = configureStore({ reducer: rootReducer })
} else {
	store = configureStore(
		{ reducer: rootReducer },
		window.__REDUX_DEVTOOLS_EXTENSION__()
	)
}

export default store
