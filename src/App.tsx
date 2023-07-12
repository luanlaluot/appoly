import React, { PropsWithChildren, useState } from 'react';
import RootRouter from './router';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './theme/ThemeProvider';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlashMessage from 'components/molecules/flash-message';
import AuthProvider from 'provider/AuthProvider';

const App = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ThemeProvider>
				<NavigationContainer>
					<AuthProvider>
						<StatusBar translucent backgroundColor={'transparent'} />
						<FlashMessage />
						<RootRouter />
					</AuthProvider>
				</NavigationContainer>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
};

export default App;
