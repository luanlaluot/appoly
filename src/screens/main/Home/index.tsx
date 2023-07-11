import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';

const Home = () => {
	return (
		<Container
			header={{ title: 'Hi, Luan', avatar: 'https://i.pravatar.cc/300' }}>
			<Button
				label="title"
				onPress={() =>
					showMessage({
						message: 'Test',
						description: 'Test description',
						type: 'info',
					})
				}
			/>
		</Container>
	);
};

export default Home;

const styles = StyleSheet.create({});
