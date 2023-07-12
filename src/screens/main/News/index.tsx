import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useTheme } from 'theme/ThemeProvider';
import Activity from './components/activity';
import Notification from './components/notification';
import Fee from './components/fee';
import Job from './components/job';

const FirstRoute = () => (
	<View style={{ flex: 1 }}>
		<Text>AYSda</Text>
	</View>
);

const SecondRoute = () => <View style={{ flex: 1 }} />;

const renderScene = SceneMap({
	first: Activity,
	second: Notification,
	third: Fee,
	four: Job,
});
const News = () => {
	const { theme } = useTheme();
	const layout = useWindowDimensions();
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Hoạt động' },
		{ key: 'second', title: 'Thông báo' },
		{ key: 'third', title: 'Học phí' },
		{ key: 'four', title: 'Việc làm' },
	]);
	return (
		<Container header={{ title: 'Bảng tin' }}>
			<TabView
				navigationState={{ index, routes }}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
				renderScene={renderScene}
				renderTabBar={props => (
					<TabBar
						{...props}
						renderLabel={({ route, focused, color }) => (
							<Text
								style={{
									color: focused ? 'black' : theme.color?.grey[400],
								}}>
								{route.title}
							</Text>
						)}
						indicatorStyle={{ backgroundColor: 'black' }}
						style={{ backgroundColor: 'white', elevation: 0, marginBottom: 20 }}
						tabStyle={{
							minHeight: 20,
							width: 'auto',
							marginHorizontal: 10,
						}}
						scrollEnabled
						bounces={false}
					/>
				)}
			/>
		</Container>
	);
};

export default News;

const styles = StyleSheet.create({});
