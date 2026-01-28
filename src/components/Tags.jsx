import { nanoid } from '@reduxjs/toolkit'
import { TagButton, TagSection } from './styles/Blog.styled.js'

const Tags = props => {
	const { tags, handleSelectTag } = props

	return (
		<TagSection>
			{tags?.map(tag => (
				<TagButton
					className='tag'
					key={nanoid()}
					onClick={e => {
						if (typeof handleSelectTag === 'function') {
							e.preventDefault()
							e.stopPropagation()
							handleSelectTag(tag)
						}
					}}
				>
					<span>#</span>
					{tag}
				</TagButton>
			))}
		</TagSection>
	)
}

export default Tags
