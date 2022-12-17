import CreatePostButton from './CreatePostButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const LoginLogoutButton = props => {
	const { userId, handleLogout } = props;

	return (
		<>
			{userId ? (
				<>
					{/* Create and Logout button appears if logged in */}
					<CreatePostButton />

					<LogoutButton handleLogout={handleLogout} />
					{/* Create and Logout button appears if logged in END */}
				</>
			) : (
				// if not logged in
				<LoginButton />
				// if not logged in END
			)}
		</>
	);
};

export default LoginLogoutButton;
