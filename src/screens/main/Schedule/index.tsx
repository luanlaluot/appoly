import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';
import {
	AgendaList,
	CalendarProvider,
	ExpandableCalendar,
} from 'react-native-calendars';
import WeekCalendar from 'react-native-calendars/src/expandableCalendar/WeekCalendar';
import { Positions } from 'react-native-calendars/src/expandableCalendar';

const Schedule = () => {
	const { setAuthenticated } = useAuthContext();
	return (
		<Container
			header={{ title: 'Lịch học' }}
			containerStyle={{ paddingHorizontal: 0 }}>
			<CalendarProvider date="2023-07-12">
				<ExpandableCalendar initialPosition={Positions.CLOSED} />
			</CalendarProvider>
		</Container>
	);
};

export default Schedule;
