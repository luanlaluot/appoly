import {
	DrawerContentScrollView,
	DrawerItemList,
	createDrawerNavigator,
	useDrawerProgress,
} from '@react-navigation/drawer';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import DrawerContent from './DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import News from 'screens/main/News';
import Home from 'screens/main/Home';
import Schedule from 'screens/main/Schedule';
import Transcript from 'screens/main/Transcript';
import { View } from 'react-native';
import Text from 'components/atoms/text';
import Icon from 'components/atoms/icon';
import NewsDetail from 'screens/main/NewsDetail';
import Profile from 'screens/main/Profile';
import TranscriptDetail from 'screens/main/TranscriptDetail';

const DrawerContext = createContext<{ progress: number; setProgress?(): void }>(
	{
		progress: 0,
	}
);

export const useDrawerContext = () => useContext(DrawerContext);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerIcon = ({ icon, focused }: any) => {
	const name = !focused ? icon + '-outline' : icon;
	return <Icon name={name} size={16} />;
};

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
			<Drawer.Screen
				name="Home"
				options={{
					drawerLabel: 'Trang chính',
					drawerIcon: ({ focused }) => (
						<DrawerIcon focused={focused} icon="home" />
					),
				}}
				component={Home}
			/>
			<Drawer.Screen
				name="News"
				component={News}
				options={{
					drawerLabel: 'Bảng tin',
					drawerIcon: ({ focused }) => (
						<DrawerIcon focused={focused} icon="notifications" />
					),
				}}
			/>
			<Drawer.Screen
				name="Schedule"
				component={Schedule}
				options={{
					drawerLabel: 'Lịch học',
					drawerIcon: ({ focused }) => (
						<DrawerIcon focused={focused} icon="calendar" />
					),
				}}
			/>
			<Drawer.Screen
				name="Transcript"
				component={Transcript}
				options={{
					drawerLabel: 'Bảng điểm',
					drawerIcon: ({ focused }) => (
						<DrawerIcon focused={focused} icon="reader" />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Main" component={DrawerRouter} />
			<Stack.Screen name="NewsDetail" component={NewsDetail} />
			<Stack.Screen name="TranscriptDetail" component={TranscriptDetail} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};
