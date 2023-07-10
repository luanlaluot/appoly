import React, { PropsWithChildren, useState } from 'react';
import ThemeProvider from './theme';
import RootRouter from './router';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = () => {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<StatusBar translucent backgroundColor={'transparent'} />
				<RootRouter />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default App;
