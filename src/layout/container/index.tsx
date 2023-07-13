import {
	Platform,
	ScrollViewProps,
	StatusBar,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header, { HeaderProps } from 'layout/header';
import { ScrollView } from 'react-native';
import { useTheme } from 'theme/ThemeProvider';
export type ContainerProps = {
	header?: HeaderProps;
	containerStyle?: StyleProp<ViewStyle>;
	scrollEnabled?: boolean;
} & PropsWithChildren;

const Container = (props: ContainerProps) => {
	const { theme } = useTheme();
	const { children, header, containerStyle = {}, scrollEnabled = true } = props;
	const WrapChildren = scrollEnabled ? ScrollView : View;
	return (
		<SafeAreaView
			style={{
				backgroundColor: 'white',
				flex: 1,
			}}>
			{header && <Header {...header} />}
			<View style={{ flex: 1 }}>
				<WrapChildren
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						...(containerStyle as any),
						overflow: 'hidden',
					}}
					style={{
						paddingHorizontal: theme.spacing?.screen,
						flexGrow: 1,
						...(containerStyle as any),
						overflow: 'hidden',
					}}>
					{children}
				</WrapChildren>
			</View>
		</SafeAreaView>
	);
};

export default Container;

const styles = StyleSheet.create({});
