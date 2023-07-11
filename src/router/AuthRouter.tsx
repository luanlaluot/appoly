import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from 'screens/auth/Login';

const Stack = createStackNavigator();

export default () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};
