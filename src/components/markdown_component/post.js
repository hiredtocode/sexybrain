import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Code from './code';

const Post = ({ body }) => {
	const [postContent, setPostContent] = useState('');

	useEffect(() => {
		import('../../markdown/article.md').then((res) => {
			fetch(res.default)
				.then((response) => response.text())
				.then((response) => setPostContent(response))
				.catch((err) => console.log(err));
		});
	}, []);

	return (
		<article className='article'>
			<div className='container'>
				<Markdown
					options={{
						overrides: {
							Code: {
								component: Code,
							},
						},
					}}
				>
					{postContent}
				</Markdown>
			</div>
		</article>
	);
};

export default Post;
