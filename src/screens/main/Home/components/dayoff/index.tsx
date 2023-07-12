import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from 'theme/ThemeProvider';
import Text from 'components/atoms/text';
import Icon from 'components/atoms/icon';

const DayOffSection = () => {
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
					<DayOffItem
						isWorkingTime={item.id === '123'}
						item={item}
						key={item.id}
					/>
				);
			})}
		</View>
	);
};
const DayOffItem = (props: { item: any; isWorkingTime: boolean }) => {
	const { item, isWorkingTime } = props;
	const { theme } = useTheme();
	return (
		<View
			style={{
				borderRadius: 6,
				marginBottom: 20,
				flexDirection: 'row',
				alignItems: 'center',
			}}>
			<View
				style={{
					height: 60,
					aspectRatio: 1,
					paddingVertical: 6,
					paddingHorizontal: 16,
					borderRadius: 60,
					backgroundColor: theme.color?.grey[300],
					marginRight: 10,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Text style={{ fontSize: 18, fontWeight: 'bold' }}>1/2</Text>
			</View>
			<View>
				<Text
					style={{
						fontSize: 12,
					}}>
					{item.subjectId}
				</Text>
				<Text bold>{item.name}</Text>
			</View>
		</View>
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

export default DayOffSection;
