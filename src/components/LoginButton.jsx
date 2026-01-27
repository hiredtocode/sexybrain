import { NavLink } from 'react-router-dom'
import { DivContainer } from './styles/Header.styled'

function LoginButton() {
	return (
		<NavLink to='/auth' aria-label='Login' style={{ textDecoration: 'none' }}>
			<DivContainer>
				<svg
					width='26px'
					height='26px'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M15 12L3 12M15 12L11 16M15 12L11 8'
						stroke='currentColor'
						strokeWidth='2.5'
						strokeLinecap='round'
						strokeLinejoin='round'
						fill='none'
					/>
				</svg>
			</DivContainer>
		</NavLink>
	)
}

export default LoginButton
