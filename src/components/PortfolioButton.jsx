import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PortfolioButton = () => {
	const { t } = useTranslation('global') // Initialize the i18next translation hook

	return (
		<NavLink to='/portfolio'>
			<span>{t('Menu.portfolio')}</span>
		</NavLink>
	)
}

export default PortfolioButton
