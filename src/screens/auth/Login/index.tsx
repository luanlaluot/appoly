import { StyleSheet, View } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Text from 'components/atoms/text';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import Icon from 'components/atoms/icon';

const Login = () => {
	return (
		<Container>
			<View style={{ flex: 3 }}>
				<Text h2>AP</Text>
				<Text h2>Polytechnic</Text>
			</View>
			<View style={{ flex: 2 }}>
				<View style={{ flex: 1 }}>
					<Input
						label="Chọn cơ sở đang học"
						value="CĐ Hồ Chí Minh"
						touchable
						iconEnd={<Icon size={20} name="chevron-down-outline" />}
						onPress={() => {
							console.log('asdjghasdihjg');
						}}
					/>
					<Button label="Đăng nhập" />
				</View>
				<Text bold style={{ alignSelf: 'center' }}>
					Version 1.0
				</Text>
			</View>
		</Container>
	);
};

export default Login;

const styles = StyleSheet.create({});
