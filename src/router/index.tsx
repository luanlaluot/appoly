import { useAuthContext } from 'provider/AuthProvider';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

const RootRouter = () => {
	const { isAuthenticated } = useAuthContext();

	return isAuthenticated ? <MainRouter /> : <AuthRouter />;
};

export default RootRouter;
