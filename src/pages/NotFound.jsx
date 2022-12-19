import error from '../assets/img/404.jpg'
import useTitle from '../components/hook/useTitle'
import { Flex, LinkStyled } from '../components/styles/General.styled.js'

const NotFound = () => {
	useTitle('404 Not Found')
	return (
		<Flex
			direction='column'
			justify='center'
			align='center'
			style={{ margin: '0 auto' }}
		>
			<img src={error} alt='Page not found' />
			<LinkStyled
				to='/'
				style={{
					marginTop: '20px',
					textDecoration: 'none',
					fontSize: '1.6rem',
				}}
			>
				Back to home...
			</LinkStyled>
		</Flex>
	)
}

export default NotFound
