import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from 'components/atoms/text';
import Icon from 'components/atoms/icon';
import Avatar from 'components/atoms/avatar';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerContent } from '@react-navigation/drawer';
import { useTheme } from 'theme/ThemeProvider';
import { moderateScale } from 'react-native-size-matters';
export type HeaderProps = {
	title?: string;
	isDetail?: boolean;
	hiddenAvatar?: boolean;
};
const Header = (props: HeaderProps) => {
	const { title, isDetail, hiddenAvatar = false } = props;
	const { theme } = useTheme();
	const navigation = useNavigation<any>();
	const insets = useSafeAreaInsets();

	const ActionButton = () => {
		const icon = isDetail ? 'arrow-back-outline' : 'reorder-two-outline';
		const onPress = useCallback(() => {
			return isDetail
				? navigation.goBack()
				: navigation.dispatch(DrawerActions.toggleDrawer());
		}, []);
		return <Icon name={icon} onPress={onPress} />;
	};

	return (
		<View
			style={{
				paddingBottom: moderateScale(14),
			}}>
			<View
				style={{
					paddingHorizontal: theme?.spacing?.screen,
				}}>
				<View
					style={{
						height: 80,
						justifyContent: 'space-between',
						alignItems: 'center',
						flexDirection: 'row',
					}}>
					<View>
						<ActionButton />
					</View>
					<View>
						{!hiddenAvatar && (
							<Avatar
								source={{
									uri: 'https://i.pravatar.cc/300',
								}}
								rounded
								onPress={() => {
									navigation.navigate('Profile');
								}}
							/>
						)}
					</View>
				</View>
				{title && <Text h1>{title}</Text>}
			</View>
		</View>
	);
};

export default Header;
