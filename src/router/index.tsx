import Home from '../screens/Home';
import Login from '../screens/Login';
import { createCustomDrawer } from './createCustomDrawer';
import {
	createDrawerNavigator,
	useDrawerProgress,
	DrawerProgressContext,
} from '@react-navigation/drawer';
import { withFancyDrawer } from './withFance';
import { useState } from 'react';
import { Animated } from 'react-native';
const Drawer = createDrawerNavigator();

const RootRouter = () => {
	const [progress, setProgress] = useState(new Animated.Value(0));
	return (
		<DrawerProgressContext.Provider value={{ process: 0 }}>
			<Drawer.Navigator
				initialRouteName="Login"
				screenOptions={{
					drawerType: 'back',
					overlayColor: '#00000000',
				}}
				drawerContent={props => {
					setProgress(props);
					return null;
				}}>
				<Drawer.Screen
					name="Login"
					component={withFancyDrawer(Login)}
					options={{
						title: 'My home',
						headerStyle: {
							backgroundColor: '#f4511e',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>
				<Drawer.Screen name="Home" component={withFancyDrawer(Home)} />
			</Drawer.Navigator>
		</DrawerProgressContext.Provider>
	);
};

export default RootRouter;
