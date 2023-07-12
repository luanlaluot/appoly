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
} & PropsWithChildren;

const Container = (props: ContainerProps) => {
	const { theme } = useTheme();
	const { children, header, containerStyle = {} } = props;
	return (
		<SafeAreaView
			style={{
				backgroundColor: 'white',
				flex: 1,
			}}>
			{header && <Header {...header} />}
			<ScrollView
				scrollEnabled={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flexGrow: 1,
					paddingHorizontal: theme.spacing?.screen,
					...(containerStyle as any),
				}}>
				{children}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Container;

const styles = StyleSheet.create({});
