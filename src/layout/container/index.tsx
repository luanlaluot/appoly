import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header, { HeaderProps } from 'layout/header';
import { ScrollView } from 'react-native';
import { useTheme } from 'theme/ThemeProvider';
export type ContainerProps = {
	header?: HeaderProps;
} & PropsWithChildren;

const Container = (props: ContainerProps) => {
	const { theme } = useTheme();
	const { children, header } = props;
	return (
		<SafeAreaView
			style={{
				backgroundColor: 'white',
				flex: 1,
			}}>
			{header && <Header {...header} />}
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: theme?.spacing?.screen,
				}}>
				{children}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Container;

const styles = StyleSheet.create({});
