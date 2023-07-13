import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Container from 'layout/container';
import Text from 'components/atoms/text';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import Icon from 'components/atoms/icon';
import BottomSheetSelect, {
	BottomSheetSelectProps,
} from 'components/molecules/bottom-sheet-select';
import { ActionSheetRef } from 'react-native-actions-sheet';
import { isEmpty, isUndefined } from 'lodash';
import { useAuthContext } from 'provider/AuthProvider';
import Recaptcha, { RecaptchaHandles } from 'react-native-recaptcha-that-works';
import WebView from 'react-native-webview';
import CookieManager from '@react-native-cookies/cookies';

const Authenticator = () => {
	const { setSection } = useAuthContext();
	const [captchaToken, setCaptchaToken] = useState('');

	const recaptcha = useRef<RecaptchaHandles | null>(null);

	useEffect(() => {
		recaptcha?.current?.open?.();
	}, []);

	return (
		<Container
			scrollEnabled={false}
			header={{
				isDetail: true,
				hiddenAvatar: true,
			}}
			containerStyle={{ paddingHorizontal: 0 }}>
			{captchaToken && (
				<WebView
					source={{
						uri: `https://ap.poly.edu.vn/login/google?campus_id=ps&g-recaptcha-cd-response=${captchaToken}`,
					}}
					style={{
						flex: 1,
					}}
					onNavigationStateChange={res => {
						if (res.url.includes('sinh-vien')) {
							CookieManager.get('https://ap.poly.edu.vn/sinh-vien', true).then(
								cookie => {
									if (cookie && !res.loading) {
										setSection?.(cookie);
									}
								}
							);
						}
					}}
				/>
			)}
			<Recaptcha
				ref={recaptcha}
				siteKey="6LdutcYaAAAAAONzYiKKddavnicgKgsTZUQA7I6p"
				baseUrl="https://ap.poly.edu.vn/"
				onVerify={setCaptchaToken}
				size="normal"
			/>
		</Container>
	);
};

export default Authenticator;
