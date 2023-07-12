import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from 'theme/ThemeProvider';
import Text from 'components/atoms/text';
import Icon from 'components/atoms/icon';

const TodaySection = () => {
	const TODAY = [
		{
			id: '121',
			subjectId: 'MUL425',
			name: 'Tiếng Anh 2.1',
			room: 'T1003 (Toa T)',
			location: 'Cong vien phan mem',
			lecturer: 'thunnd',
			time: '13:00:00 - 15:00:00',
		},
		{
			id: '123',
			subjectId: 'MUL217',
			name: 'Ý tưởng sáng tạo',
			room: 'T1003 (Toa T)',
			location: 'Cong vien phan mem',
			lecturer: 'thunnd',
			time: '13:00:00 - 15:00:00',
		},
		{
			id: '124',
			subjectId: 'MUL2123',
			name: 'Thiết kế bao bì',
			room: 'T1003 (Toa T)',
			location: 'Cong vien phan mem',
			lecturer: 'thunnd',
			time: '15:30:00 - 17:00:00',
		},
	];
	return (
		<View>
			{TODAY.map(item => {
				return (
					<TodayItem
						isWorkingTime={item.id === '123'}
						item={item}
						key={item.id}
					/>
				);
			})}
		</View>
	);
};
const TodayItem = (props: { item: any; isWorkingTime: boolean }) => {
	const { item, isWorkingTime } = props;
	const { theme } = useTheme();
	if (!isWorkingTime) {
		return (
			<TouchableOpacity
				style={{
					padding: 16,
					backgroundColor: theme.color?.grey[300],
					borderRadius: 6,
					marginBottom: 10,
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<View
					style={{
						paddingVertical: 6,
						paddingHorizontal: 16,
						borderRadius: 6,
						backgroundColor: 'white',
						marginRight: 10,
					}}>
					<Text style={{ fontSize: 12, fontWeight: 'bold' }}>
						{item.subjectId}
					</Text>
				</View>
				<Text bold>{item.name}</Text>
			</TouchableOpacity>
		);
	}
	return (
		<TouchableOpacity
			style={{
				padding: 20,
				backgroundColor: theme.color?.primary.main,
				borderRadius: 6,
				marginBottom: 10,
			}}>
			<View style={{ flexDirection: 'row', marginBottom: 8 }}>
				<View
					style={{
						paddingVertical: 6,
						paddingHorizontal: 16,
						borderRadius: 6,
						backgroundColor: 'white',
						marginRight: 10,
					}}>
					<Text style={{ fontSize: 12, fontWeight: 'bold' }}>
						{item.subjectId}
					</Text>
				</View>
				<View
					style={{
						paddingVertical: 6,
						paddingHorizontal: 16,
						borderRadius: 6,
						backgroundColor: 'white',
					}}>
					<Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.room}</Text>
				</View>
			</View>
			<Text bold h4>
				{item.name}
			</Text>
			<View>
				<TodayDetail icon="location-outline" value={item.location} />
				<TodayDetail icon="person-outline" value={item.lecturer} />
				<TodayDetail icon="time-outline" value={item.time} />
			</View>
		</TouchableOpacity>
	);
};

const TodayDetail = ({ icon, value }: { icon: string; value: string }) => {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<Icon name={icon} size={16} />
			<Text style={{ marginLeft: 6 }}>{value}</Text>
		</View>
	);
};

export default TodaySection;

const styles = StyleSheet.create({});
