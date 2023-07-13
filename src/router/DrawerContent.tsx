import React from 'react';
import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import Text from 'components/atoms/text';
import { useTheme } from 'theme/ThemeProvider';
import {
	CommonActions,
	DrawerActions,
	useLinkBuilder,
} from '@react-navigation/native';
import Button from 'components/atoms/button';
import { moderateScale } from 'react-native-size-matters';
import Avatar from 'components/atoms/avatar';
import Icon from 'components/atoms/icon';
import { useAuthContext } from 'provider/AuthProvider';

const DrawerContent = (props: DrawerContentComponentProps) => {
	const { theme } = useTheme();
	const { setSection } = useAuthContext();
	const buildLink = useLinkBuilder();
	const { state, descriptors, navigation } = props;
	const focusedRoute = state.routes[state.index];
	const focusedDescriptor = descriptors[focusedRoute.key];
	const focusedOptions = focusedDescriptor.options;
	const { drawerInactiveBackgroundColor } = focusedOptions;
	return (
		<DrawerContentScrollView
			contentContainerStyle={{ flex: 1 }}
			style={{
				backgroundColor: theme?.color?.primary.main,
				paddingHorizontal: moderateScale(20),
			}}
			{...props}>
			<View
				style={{
					height: 80,
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
					}}>
					<Avatar
						source={{
							uri: 'https://i.pravatar.cc/300',
						}}
						rounded
					/>
					<View
						style={{
							marginLeft: moderateScale(10),
						}}>
						<Text bold>Đặng Thị Như Huyển</Text>
						<Text
							style={{
								fontSize: moderateScale(12),
								color: theme?.color?.grey[700],
							}}>
							Thiết kế đồ hoạ
						</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					flex: 1,
					width: '100%',
					justifyContent: 'center',
				}}>
				{state.routes.map((route, i) => {
					const focused = i === state.index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'drawerItemPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!event.defaultPrevented) {
							navigation.dispatch({
								...(focused
									? DrawerActions.closeDrawer()
									: CommonActions.navigate({
											name: route.name,
											merge: true,
									  })),
								target: state.key,
							});
						}
					};

					const {
						title,
						drawerLabel,
						drawerIcon,
						drawerLabelStyle,
						drawerItemStyle,
						drawerAllowFontScaling,
					} = descriptors[route.key].options;

					return (
						<DrawerItem
							key={route.key}
							label={
								drawerLabel !== undefined
									? drawerLabel
									: title !== undefined
									? title
									: route.name
							}
							icon={drawerIcon}
							focused={focused}
							activeTintColor={'black'}
							inactiveTintColor={'black'}
							activeBackgroundColor={'white'}
							inactiveBackgroundColor={drawerInactiveBackgroundColor}
							allowFontScaling={false}
							labelStyle={[
								drawerLabelStyle,
								{ fontWeight: focused ? 'bold' : 'normal' },
							]}
							style={drawerItemStyle}
							to={buildLink(route.name, route.params)}
							onPress={onPress}
						/>
					);
				})}
			</View>
			<View
				style={{
					paddingBottom: moderateScale(20),
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Button
					label="Đăng xuất"
					style={{
						backgroundColor: 'white',
						width: '100%',
					}}
					labelStyle={{
						color: 'black',
						fontWeight: 'bold',
					}}
					iconStart={<Icon name={'log-out-outline'} size={20} />}
					onPress={() => setSection?.(undefined)}
				/>
			</View>
		</DrawerContentScrollView>
	);
};

export default DrawerContent;
