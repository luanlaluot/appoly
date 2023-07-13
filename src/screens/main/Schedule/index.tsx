import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';
import {
	Agenda,
	AgendaList,
	CalendarProvider,
	ExpandableCalendar,
	LocaleConfig,
} from 'react-native-calendars';
import WeekCalendar from 'react-native-calendars/src/expandableCalendar/WeekCalendar';
import { Positions } from 'react-native-calendars/src/expandableCalendar';
import AgendaItem from './components/item';
import { useTheme } from 'theme/ThemeProvider';
import { isEmpty } from 'lodash';
import { MarkedDates } from 'react-native-calendars/src/types';
const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
	const array: string[] = [];
	for (let index = 1; index <= numberOfDays; index++) {
		let d = Date.now();
		if (index > 8) {
			// set dates on the next month
			const newMonth = new Date(d).getMonth() + 1;
			d = new Date(d).setMonth(newMonth);
		}
		const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
		const dateString = date.toISOString().split('T')[0];
		array.push(dateString);
	}
	return array;
}
function getPastDate(numberOfDays: number) {
	return new Date(Date.now() - 864e5 * numberOfDays)
		.toISOString()
		.split('T')[0];
}

function getMarkedDates() {
	const marked: MarkedDates = {};

	agendaItems.forEach(item => {
		// NOTE: only mark dates with data
		if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
			marked[item.title] = { marked: true };
		} else {
			marked[item.title] = { disabled: true };
		}
	});
	return marked;
}
export const agendaItems = [
	{
		title: dates[0],
		data: [{ hour: '12am', duration: '1h', title: 'First Yoga' }],
	},
	{
		title: dates[1],
		data: [
			{ hour: '4pm', duration: '1h', title: 'Pilates ABC' },
			{ hour: '5pm', duration: '1h', title: 'Vinyasa Yoga' },
		],
	},
	{
		title: dates[2],
		data: [
			{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' },
			{ hour: '2pm', duration: '1h', title: 'Deep Stretches' },
			{ hour: '3pm', duration: '1h', title: 'Private Yoga' },
		],
	},
	{
		title: dates[3],
		data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }],
	},
	{
		title: dates[4],
		data: [{}],
	},
	{
		title: dates[5],
		data: [
			{ hour: '9pm', duration: '1h', title: 'Middle Yoga' },
			{ hour: '10pm', duration: '1h', title: 'Ashtanga' },
			{ hour: '11pm', duration: '1h', title: 'TRX' },
			{ hour: '12pm', duration: '1h', title: 'Running Group' },
		],
	},
	{
		title: dates[6],
		data: [{ hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }],
	},
	{
		title: dates[7],
		data: [{}],
	},
	{
		title: dates[8],
		data: [
			{ hour: '9pm', duration: '1h', title: 'Pilates Reformer' },
			{ hour: '10pm', duration: '1h', title: 'Ashtanga' },
			{ hour: '11pm', duration: '1h', title: 'TRX' },
			{ hour: '12pm', duration: '1h', title: 'Running Group' },
		],
	},
	{
		title: dates[9],
		data: [
			{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' },
			{ hour: '2pm', duration: '1h', title: 'Deep Stretches' },
			{ hour: '3pm', duration: '1h', title: 'Private Yoga' },
		],
	},
	{
		title: dates[10],
		data: [{ hour: '12am', duration: '1h', title: 'Last Yoga' }],
	},
	{
		title: dates[11],
		data: [
			{ hour: '1pm', duration: '1h', title: 'Ashtanga Yoga' },
			{ hour: '2pm', duration: '1h', title: 'Deep Stretches' },
			{ hour: '3pm', duration: '1h', title: 'Private Yoga' },
		],
	},
	{
		title: dates[12],
		data: [{ hour: '12am', duration: '1h', title: 'Last Yoga' }],
	},
	{
		title: dates[13],
		data: [{ hour: '12am', duration: '1h', title: 'Last Yoga' }],
	},
];
LocaleConfig.locales['vi'] = {
	monthNames: [
		'Tháng 1,',
		'Tháng 2,',
		'Tháng 3,',
		'Tháng 4,',
		'Tháng 5,',
		'Tháng 6,',
		'Tháng 7,',
		'Tháng 8,',
		'Tháng 9,',
		'Tháng 10,',
		'Tháng 11,',
		'Tháng 12,',
	],
	monthNamesShort: [
		'Tháng 1,',
		'Tháng 2,',
		'Tháng 3,',
		'Tháng 4,',
		'Tháng 5,',
		'Tháng 6,',
		'Tháng 7,',
		'Tháng 8,',
		'Tháng 9,',
		'Tháng 10,',
		'Tháng 11,',
		'Tháng 12,',
	],
	dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
	dayNamesShort: ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'CN'],
	today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'vi';

const Schedule = () => {
	const { theme } = useTheme();
	const { setAuthenticated } = useAuthContext();
	const renderItem = useCallback(({ item }: any) => {
		return <AgendaItem item={item} />;
	}, []);
	return (
		<Container
			header={{ title: 'Lịch học' }}
			containerStyle={{ paddingHorizontal: 0 }}
			scrollEnabled={false}>
			<CalendarProvider date="2023-07-12">
				<ExpandableCalendar
					initialPosition={Positions.CLOSED}
					contentContainerStyle={{
						elevation: 0,
					}}
					theme={{
						backgroundColor: '#ffffff',
						calendarBackground: '#ffffff',
						textSectionTitleColor: '#b6c1cd',
						selectedDayBackgroundColor: theme.color?.primary.main as string,
						selectedDayTextColor: '#ffffff',
						todayTextColor: theme.color?.primary.main as string,
						dayTextColor: '#2d4150',
						textDisabledColor: '#d9e1e8',
						dotColor: theme.color?.primary.main as string,
						selectedDotColor: '#ffffff',
						arrowColor: 'black',
						disabledArrowColor: '#d9e1e8',
						monthTextColor: 'black',
						indicatorColor: 'black',
						textDayFontFamily: 'monospace',
						textMonthFontFamily: 'monospace',
						textDayHeaderFontFamily: 'monospace',
						textDayFontWeight: '300',
						textMonthFontWeight: 'bold',
						textDayHeaderFontWeight: '300',
						textDayFontSize: 16,
						textMonthFontSize: 14,
						textDayHeaderFontSize: 12,
					}}
					markedDates={getMarkedDates()}
				/>
				<AgendaList
					sections={agendaItems}
					renderItem={renderItem}
					dayFormat="dd MMM yyyy"
				/>
			</CalendarProvider>
		</Container>
	);
};

export default Schedule;
