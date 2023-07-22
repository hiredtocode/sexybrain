import { connect } from 'react-redux'
import { UnitedStatesIcon, KoreanIcon } from '../../assets/icons.js'
import { useTranslation } from 'react-i18next'
import { LanguageContainer } from '../../components/styles/Header.styled'

const SelectLanguage = ({
	language,
	setEnglishLanguage,
	setKoreanLanguage,
}) => {
	// i18n configure
	const { i18n } = useTranslation('global') // Initialize the i18next translation hook

	const handleClick = language => () => {
		language === 'kr' ? setKoreanLanguage() : setEnglishLanguage()
		i18n.changeLanguage(language)
	}

	return (
		<LanguageContainer onClick={handleClick(language)}>
			{language === 'kr' ? <KoreanIcon /> : <UnitedStatesIcon />}
		</LanguageContainer>
	)
}

const mapStateToProps = state => ({
	language: state.toggleLanguageButton.language,
})

const mapDispatchToProps = dispatch => ({
	setEnglishLanguage: () => dispatch({ type: 'SET_ENGLISH_LANGUAGE' }),
	setKoreanLanguage: () => dispatch({ type: 'SET_KOREAN_LANGUAGE' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage)
