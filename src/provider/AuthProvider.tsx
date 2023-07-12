import { StyleSheet, Text, View } from 'react-native';
import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';

type AuthContextProps = {
	isAuthenticated: boolean;
	setAuthenticated?(isAuthenticated: boolean): void;
};
const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: true,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [isAuthenticated, setAuthenticated] = useState(true);
	const handelAuthenticate = (isAuthenticated: boolean) => {
		setAuthenticated(isAuthenticated);
	};
	const value = useMemo(
		() => ({
			isAuthenticated,
			setAuthenticated: handelAuthenticate,
		}),
		[isAuthenticated, handelAuthenticate]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
