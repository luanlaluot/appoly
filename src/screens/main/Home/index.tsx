import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';

const Home = () => {
	const { setAuthenticated } = useAuthContext();
	return (
		<Container
			header={{ title: 'Hi, Luan', avatar: 'https://i.pravatar.cc/300' }}>
			<Button label="Đăng xuất" onPress={() => setAuthenticated?.(false)} />
		</Container>
	);
};

export default Home;

const styles = StyleSheet.create({});
