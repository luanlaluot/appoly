import { StyleSheet, Text, View } from 'react-native';
import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';
import { Cookies } from '@react-native-cookies/cookies';
import { isUndefined } from 'lodash';
import { AsyncStoreHelper } from '../helper';

type AuthContextProps = {
	isAuthenticated: boolean;
	section?: Cookies;
	setSection?(section?: Cookies): void;
	setAuthenticated?(isAuthenticated: boolean): void;
};
const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: true,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [isAuthenticated, setAuthenticated] = useState(false);
	const [section, setSection] = useState<Cookies | undefined>();
	const handelAuthenticate = (isAuthenticated: boolean) => {
		setAuthenticated(isAuthenticated);
	};
	console.log(section);

	const handelSection = (section?: Cookies) => {
		setSection(section);
		if (section) AsyncStoreHelper.saveData('@section', section);
	};
	const value = useMemo(
		() => ({
			isAuthenticated: !isUndefined(AsyncStoreHelper.getData('@section')),
			setAuthenticated: handelAuthenticate,
			setSection: handelSection,
		}),
		[section, isAuthenticated, handelAuthenticate, handelSection]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
