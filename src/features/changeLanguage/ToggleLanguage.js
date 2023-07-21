import { connect } from 'react-redux'
import { UnitedStatesIcon, KoreanIcon } from '../../assets/icons.js'
import { LanguageContainer } from '../../components/styles/Header.styled'

const DarkLightMode = ({ language, setEnglishLanguage, setKoreanLanguage }) => {
	const handleClick = (language, setEnglishLanguage, setKoreanLanguage) => {
		return () => {
			language === 'en' ? setKoreanLanguage() : setEnglishLanguage()
		}
	}

	return (
		<LanguageContainer
			onClick={handleClick(language, setEnglishLanguage, setKoreanLanguage)}
		>
			{language === 'en' ? <UnitedStatesIcon /> : <KoreanIcon />}
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

export default connect(mapStateToProps, mapDispatchToProps)(DarkLightMode)
