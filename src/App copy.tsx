import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { getHTML } from './api';
import Recaptcha, { RecaptchaHandles } from 'react-native-recaptcha-that-works';
import WebView from 'react-native-webview';

export default function App() {
	const [captchaToken, setCaptchaToken] = useState('');

	const recaptcha = useRef<RecaptchaHandles | null>(null);

	const send = () => {
		console.log('send!');
		recaptcha?.current?.open?.();
	};
	return (
		<View style={{ flex: 1 }}>
			<Text>TEst</Text>
			{/* {captchaToken && (
				<WebView
					source={{
						uri: `https://ap.poly.edu.vn/login/google?campus_id=ps&g-recaptcha-cd-response=${captchaToken}`,
					}}
					style={{
						flex: 1,
					}}
					onNavigationStateChange={res => {
						console.log('====================================');
						console.log(res);
						console.log('====================================');
					}}
				/>
			)}
			<Recaptcha
				ref={recaptcha}
				siteKey="6LdutcYaAAAAAONzYiKKddavnicgKgsTZUQA7I6p"
				baseUrl="https://ap.poly.edu.vn/"
				// onVerify={onVerify}
				// onExpire={onExpire}
				onVerify={setCaptchaToken}
				size="normal"
			/> */}
			<Button title="Send" onPress={send} />
			<Text>TEst</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
