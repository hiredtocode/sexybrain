import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ResumeButton = () => {
	const { t } = useTranslation('global') // Initialize the i18next translation hook

	return (
		<NavLink to='/resume'>
			<span>{t('menu.resume')}</span>
		</NavLink>
	)
}

export default ResumeButton
