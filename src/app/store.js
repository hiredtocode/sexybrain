import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resetButtonReducer from '../features/buttonState/resetButtonReducer';
import darkmodeReducer from '../features/darkMode/darkmodeReducer';
import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
	resetButton: resetButtonReducer,
	darkmode: darkmodeReducer,
	counter: counterReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
