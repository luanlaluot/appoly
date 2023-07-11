import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

const RootRouter = () => {
	const isAuthenticated = false;
	return isAuthenticated ? <MainRouter /> : <AuthRouter />;
};

export default RootRouter;
