import {
	RefreshControl,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import { useTheme } from 'theme/ThemeProvider';
import Text from 'components/atoms/text';

const DATA = [
	{
		time: '13:00:00 123/07/2023',
		title: 'THÔNG BÁO ĐĂNG KÝ THỰC HIỆN DỰ ÁN TỐT NGHIỆP HỌC KỲ FALL 2023',
		poster: 'nhuntq20',
		lastUpdated:
			'Cập nhật lần cuối bởi nhuntq20 vào lúc 14:05:41 ngày 30/06/2023',
	},
	{
		time: '13:00:00 123/07/2023',
		title: 'THÔNG BÁO ĐĂNG KÝ THỰC HIỆN DỰ ÁN TỐT NGHIỆP HỌC KỲ FALL 2023',
		poster: 'nhuntq20',
		lastUpdated:
			'Cập nhật lần cuối bởi nhuntq20 vào lúc 14:05:41 ngày 30/06/2023',
	},
	{
		time: '13:00:00 123/07/2023',
		title: 'THÔNG BÁO ĐĂNG KÝ THỰC HIỆN DỰ ÁN TỐT NGHIỆP HỌC KỲ FALL 2023',
		poster: 'nhuntq20',
		lastUpdated:
			'Cập nhật lần cuối bởi nhuntq20 vào lúc 14:05:41 ngày 30/06/2023',
	},
	{
		time: '13:00:00 123/07/2023',
		title: 'THÔNG BÁO ĐĂNG KÝ THỰC HIỆN DỰ ÁN TỐT NGHIỆP HỌC KỲ FALL 2023',
		poster: 'nhuntq20',
		lastUpdated:
			'Cập nhật lần cuối bởi nhuntq20 vào lúc 14:05:41 ngày 30/06/2023',
	},
	{
		time: '13:00:00 123/07/2023',
		title: 'THÔNG BÁO ĐĂNG KÝ THỰC HIỆN DỰ ÁN TỐT NGHIỆP HỌC KỲ FALL 2023',
		poster: 'nhuntq20',
		lastUpdated:
			'Cập nhật lần cuối bởi nhuntq20 vào lúc 14:05:41 ngày 30/06/2023',
	},
];

const Activity = () => {
	const { theme } = useTheme();
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			refreshControl={<RefreshControl refreshing={false} />}>
			{DATA.map(item => {
				return (
					<TouchableOpacity
						style={{
							padding: 16,
							backgroundColor: theme?.color?.grey[200],
							marginBottom: 10,
							borderRadius: 6,
							alignItems: 'baseline',
						}}>
						<Text>{item.time}</Text>
						<Text
							bold
							style={{
								marginBottom: 8,
							}}>
							{item.title}
						</Text>
						<View
							style={{
								paddingHorizontal: 10,
								paddingVertical: 6,
								backgroundColor: theme?.color?.grey[300],
								borderRadius: 6,
							}}>
							<Text>{item.poster}</Text>
						</View>
						<Text
							style={{
								fontSize: 9,
								fontStyle: 'italic',
								color: theme.color?.grey[600],
							}}>
							{item.lastUpdated}
						</Text>
					</TouchableOpacity>
				);
			})}
		</ScrollView>
	);
};
export default Activity;
