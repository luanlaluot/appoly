import Text from 'components/atoms/text';
import Container from 'layout/container';
import { useAuthContext } from 'provider/AuthProvider';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodaySection from './components/today';
import DayOffSection from './components/dayoff';

const Home = () => {
	const { setAuthenticated } = useAuthContext();
	return (
		<Container
			header={{
				title: 'Hi, Luan',
			}}>
			<SectionContainer title="Hôm nay">
				<TodaySection />
			</SectionContainer>
			<SectionContainer title="Điểm danh">
				<DayOffSection />
			</SectionContainer>
		</Container>
	);
};

const SectionContainer = ({
	children,
	title,
}: {
	title: string;
	children: React.ReactNode;
}) => {
	return (
		<View style={{ marginBottom: 20 }}>
			<Text bold style={{ marginBottom: 10 }}>
				{title}
			</Text>
			{children}
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
