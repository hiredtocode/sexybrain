import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
	oneDark,
	oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import DefaultImage from '../assets/img/default.jpg'
import useTitle from '../components/hook/useTitle'
import {
	BlogDetail,
	BlogTitleBox,
	MarkdownContainer,
} from '../components/styles/Blog.styled.js'
import { Flex, H2 } from '../components/styles/General.styled.js'
import Tags from '../components/Tags'
import { db } from '../firebase.config'

const PostDetailPage = props => {
	const { id } = useParams()
	const [blog, setBlog] = useState(null)
	const { user } = props
	const userId = user?.uid
	const mode = useSelector(state => state.darkmode.mode)

	useTitle(`${blog?.title}`)
	useEffect(() => {
		id && getBlogDetail()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	const getBlogDetail = async () => {
		const docRef = doc(db, 'blogPosts', id)
		const blogDetail = await getDoc(docRef)
		setBlog(blogDetail.data())
	}

	return (
		<div className='single' style={{ flexGrow: '1' }}>
			{/* Show default image if no image was uploaded */}
			<BlogTitleBox
				style={
					blog?.imgUrl
						? { backgroundImage: `url('${blog?.imgUrl}')` }
						: { backgroundImage: `url('${DefaultImage}')` }
				}
			>
				<div className='overlay'></div>
				<div className='blog-title'>
					<span>{blog?.createdTimestamp?.toDate().toDateString()}</span>
					<H2>{blog?.title}</H2>
				</div>
			</BlogTitleBox>

			{/* Show default image if no image was uploaded END */}
			<BlogDetail>
				<div className='authorInfo'>
					<>Written on: {blog?.createdTimestamp?.toDate().toDateString()}</>
					<>
						{blog?.lastUpdatedTimestamp?.toDate().toDateString() !==
						blog?.createdTimestamp?.toDate().toDateString() ? (
							<span>
								Edited/Updated:{' '}
								{blog?.lastUpdatedTimestamp?.toDate().toDateString()}
							</span>
						) : null}
					</>
					<Flex direction={'row'} align='center'>
						{userId ? (
							<Link to={`/update/${id}`}>
								<FontAwesomeIcon
									icon={faEdit}
									name='edit'
									style={{
										cursor: 'pointer',
										paddingRight: '10px',
										textDecoration: 'none',
									}}
									size='2x'
									aria-label={id}
								/>
							</Link>
						) : null}
						<div style={{ paddingRight: '10px' }}>Tags:</div>
						<>
							<Tags tags={blog?.tags} />
						</>
					</Flex>
				</div>
				<MarkdownContainer>
					<ReactMarkdown
						remarkPlugins={[remarkGfm, { singleTilde: false }]}
						children={blog?.body}
						components={{
							code({
								node,
								inline,
								className,
								children,
								includeElementIndex,
								...props
							}) {
								const match = /language-(\w+)/.exec(className || '')
								return !inline && match ? (
									<SyntaxHighlighter
										children={String(children).replace(/\n$/, '')}
										language={match[1]}
										style={mode === 'dark' ? oneDark : oneLight}
										{...props}
									/>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								)
							},
						}}
					/>
				</MarkdownContainer>
			</BlogDetail>
		</div>
	)
}

export default PostDetailPage
