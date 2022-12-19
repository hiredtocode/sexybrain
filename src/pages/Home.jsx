import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
} from 'firebase/firestore'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { CancelButton } from '../components/CancelButton'
import Card from '../components/Card'
import CategoryList from '../components/CategoryList'
import useTitle from '../components/hook/useTitle.js'
import Spinner from '../components/Spinner'
import { BlogContainer } from '../components/styles/BlogContainer.styled'
import { Aside } from '../components/styles/CategoryContainer.styled'
import { TagContainer } from '../components/styles/TagSection.styled.js'
import { H2 } from '../components/styles/Title.styled.js'
import Tags from '../components/Tags'
import { db } from '../firebase.config'

const Home = props => {
	useTitle('JH Blog')

	const { user } = props
	const [loading, setLoading] = useState(true)
	const [blogBackup, setBlogBackup] = useState([])
	const [blogs, setBlogs] = useState(blogBackup)
	const [categories, setCategory] = useState([])
	const [tags, setTags] = useState([])
	const [tagReset, setTagReset] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState(null)
	const [selectedTag, setSelectedTag] = useState(null)

	//This block retrieves blog posts from firebase by latest timestamp
	const blogCollectionRef = collection(db, 'blogPosts')

	const createdTimestamp = query(
		blogCollectionRef,
		orderBy('createdTimestamp', 'desc')
	)

	useEffect(() => {
		const fetchBlogPosts = onSnapshot(
			createdTimestamp,
			snapshot => {
				let tags = []
				let list = []
				snapshot.docs.forEach(doc => {
					tags.push(...doc.get('tags'))
					list.push({ ...doc.data(), id: doc.id })
				})
				const uniqueTags = [...new Set(tags)]
				const uniqueCategories = [...new Set(list.map(item => item.category))]
				setCategory(uniqueCategories)
				setTags(uniqueTags)
				setLoading(false)

				setBlogs(list)
				setBlogBackup(list)
			},
			error => {
				toast.error(`There was an error ${error}`)
			}
		)
		return () => fetchBlogPosts()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const memoizedBlogs = useMemo(() => blogs, [blogs])

	if (loading) {
		return <Spinner />
	}
	const handleDelete = id => {
		return async () => {
			if (window.confirm('Are you sure?')) {
				try {
					setLoading(true)
					await deleteDoc(doc(db, 'blogPosts', id))
					toast.success('Blog deleted successfully')
					setLoading(false)
				} catch (err) {
					toast.error(`Sorry there was an error ${err}`)
				}
			}
		}
	}

	// Show posts that are only related to the clicked category when clicked
	const handleSelectCategory = category => {
		return () => {
			setSelectedCategory(category)
			const result = blogBackup.filter(blog => {
				return blog.category === category
			})
			setBlogs(result)
			setSelectedTag(null)
		}
	}

	// Show posts that are only related to the clicked tag
	const handleSelectTag = tag => {
		setSelectedTag(tag)
		const result = blogBackup.filter(blog => {
			return blog.tags.includes(tag)
		})
		setBlogs(result)
		setSelectedCategory(null)
	}

	const handleClose = () => {
		setBlogs(blogBackup)
		setSelectedCategory(null)
		setSelectedTag(null)
	}
	return (
		<>
			<BlogContainer>
				<H2>Blogs</H2>
				{selectedCategory && (
					<div className='selected'>
						<p>
							Selected category:{' '}
							<span onClick={handleClose}>{selectedCategory}</span>
						</p>
						<button className='cancel' onClick={handleClose}>
							<CancelButton />
						</button>
					</div>
				)}
				{selectedTag && (
					<div className='selected'>
						<p>
							Selected tag: <span onClick={handleClose}>{selectedTag}</span>
						</p>
						<button className='cancel' onClick={handleClose}>
							<CancelButton />
						</button>
					</div>
				)}

				<Card blogs={memoizedBlogs} user={user} handleDelete={handleDelete} />
			</BlogContainer>
			<Aside>
				<H2 style={{ textAlign: 'center' }}>Categories</H2>
				<CategoryList
					categories={categories}
					handleSelectCategory={handleSelectCategory}
				/>
				<H2 style={{ textAlign: 'center' }}>Tags</H2>
				<TagContainer>
					<Tags tags={tags} handleSelectTag={handleSelectTag} />
				</TagContainer>
			</Aside>
		</>
	)
}

export default Home
