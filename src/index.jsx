import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './app/store'
import reportWebVitals from './reportWebVitals'
import { I18nextProvider } from 'react-i18next'
import language_en from './languages/en/global.json'
import language_kr from './languages/kr/global.json'
import i18next from 'i18next'

i18next.init({
	interpolation: { escapeValue: true },
	lng: 'kr',
	resources: {
		en: {
			global: language_en,
		},
		kr: {
			global: language_kr,
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<I18nextProvider i18n={i18next}>
					<App />
				</I18nextProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
