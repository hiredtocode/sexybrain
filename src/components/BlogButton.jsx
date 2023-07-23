import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BlogButton = () => {
	const { t } = useTranslation('global') // Initialize the i18next translation hook

	return (
		<NavLink to='/'>
			<span>{t('menu.blog')}</span>
		</NavLink>
	)
}

export default BlogButton
