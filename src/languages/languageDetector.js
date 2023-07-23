// languageDetector.js

// Function to set the default language based on the user's preferred language
export function setDefaultLanguage() {
	const userLanguage = navigator.language.toLowerCase()
	let defaultLanguage = 'kr' // Default to Korean if the user's language is not supported

	// List of supported languages in your website (add more if needed)
	const supportedLanguages = ['en', 'kr'] // English, Korean

	// Check if the user's preferred language is in the supported languages list
	if (supportedLanguages.includes(userLanguage)) {
		defaultLanguage = userLanguage
	}

	return defaultLanguage
}
