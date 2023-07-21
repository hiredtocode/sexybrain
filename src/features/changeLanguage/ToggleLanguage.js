import { connect } from 'react-redux'
import { UnitedStatesIcon, KoreanIcon } from '../../assets/icons.js'
import { LanguageContainer } from '../../components/styles/Header.styled'

const DarkLightMode = ({ mode, setEnglishLanguage, setKoreanLanguage }) => {
	const handleClick = (mode, setEnglishLanguage, setKoreanLanguage) => {
		return () => {
			mode === 'en' ? setKoreanLanguage() : setEnglishLanguage()
		}
	}

	return (
		<LanguageContainer
			onClick={handleClick(mode, setEnglishLanguage, setKoreanLanguage)}
		>
			{mode === 'en' ? <UnitedStatesIcon /> : <KoreanIcon />}
		</LanguageContainer>
	)
}

const mapStateToProps = state => ({
	mode: state.toggleLanguageButton.mode,
})

const mapDispatchToProps = dispatch => ({
	setEnglishLanguage: () => dispatch({ type: 'SET_ENGLISH_LANGUAGE' }),
	setKoreanLanguage: () => dispatch({ type: 'SET_KOREAN_LANGUAGE' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(DarkLightMode)
