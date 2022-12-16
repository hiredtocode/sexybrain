import { combineReducers, configureStore } from '@reduxjs/toolkit';
import resetButtonReducer from './resetButtonReducer';
import darkmodeReducer from './darkmodeReducer';

const rootReducer = combineReducers({
	resetButton: resetButtonReducer,
	darkmode: darkmodeReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
