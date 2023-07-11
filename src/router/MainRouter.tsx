import {
	DrawerContentScrollView,
	DrawerItemList,
	createDrawerNavigator,
	useDrawerProgress,
} from '@react-navigation/drawer';
import Home from '../screens/main/Home';
import Login from '../screens/auth/Login';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import DrawerContent from './DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';

const DrawerContext = createContext<{ progress: number; setProgress?(): void }>(
	{
		progress: 0,
	}
);

export const useDrawerContext = () => useContext(DrawerContext);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerRouter = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={{
				drawerType: 'back',
				overlayColor: '#00000000',
				headerShown: false,
			}}
			drawerContent={DrawerContent}>
			<Drawer.Screen name="Home" component={Home} />
		</Drawer.Navigator>
	);
};

export default () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Main" component={DrawerRouter} />
		</Stack.Navigator>
	);
};
