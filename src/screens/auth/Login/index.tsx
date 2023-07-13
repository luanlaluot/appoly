import { StyleSheet, View } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';

const OPTIONS = [
	{
		key: 'ph',
		value: 'CĐ Hà Nội',
	},
	{
		key: 'pw',
		value: 'CĐ Hồ Chí Minh',
	},
	{
		key: 'pc',
		value: 'CĐ Cần Thơ',
	},
	{
		key: 'pd',
		value: 'CĐ Đà Nẵng',
	},
	{
		key: 'pk',
		value: 'CĐ Tây Nguyên',
	},
	{
		key: 'pp',
		value: 'CĐ Hải Phòng',
	},
	{
		key: 'ht',
		value: 'CĐ Hitecj',
	},
];

const Login = () => {
	const navigation = useNavigation();
	const { setAuthenticated } = useAuthContext();
	const [campus, setCampus] = useState<{ key: string; value: string }>();
	const ref = useRef<ActionSheetRef>(null);
	const handelItemPress = useCallback(
		(campus: { key: string; value: string }) => {
			const selectCampus = campus.key === 'cancel' ? undefined : campus;
			setCampus(selectCampus);
			if (ref) ref.current?.hide();
		},
		[]
	);
	const handelLogin = () => {
		navigation.navigate('Authenticator');
	};
	return (
		<Container scrollEnabled={false}>
			<View style={{ flex: 3 }}>
				<Text
					bold
					style={{
						fontSize: 50,
						lineHeight: 60,
					}}>
					AP
				</Text>
				<Text
					bold
					style={{
						fontSize: 50,
						lineHeight: 60,
					}}>
					Polytechnic
				</Text>
			</View>
			<View style={{ flex: 2 }}>
				<View style={{ flex: 1 }}>
					<Input
						label={'Chọn cơ sở đang học'}
						value={isUndefined(campus) ? 'Lựa chọn cơ sở' : campus.value}
						touchable
						iconEnd={<Icon size={20} name="chevron-down-outline" />}
						onPress={() => {
							ref?.current?.show();
						}}
					/>
					<Button
						disabled={isEmpty(campus)}
						label="Đăng nhập"
						onPress={handelLogin}
					/>
				</View>
				<Text bold style={{ alignSelf: 'center' }}>
					Version 1.0
				</Text>
			</View>
			<BottomSheetSelect
				ref={ref}
				options={OPTIONS}
				onItemPress={handelItemPress}
			/>
		</Container>
	);
};

export default Login;
