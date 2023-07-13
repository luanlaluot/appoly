import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';
import Input from 'components/atoms/input';
import Icon from 'components/atoms/icon';
import BottomSheetSelect from 'components/molecules/bottom-sheet-select';
import { ActionSheetRef } from 'react-native-actions-sheet';
import { FlashList } from '@shopify/flash-list';
import { useTheme } from 'theme/ThemeProvider';
import Text from 'components/atoms/text';
const OPTIONS = [
	{
		key: 'fall2023',
		value: 'Fall 2023',
	},
	{
		key: 'summer2023',
		value: 'Summer 2023',
	},
	{
		key: 'spring2023',
		value: 'Spring 2023',
	},
];
const TranscriptDetail = () => {
	const ref = useRef<ActionSheetRef>(null);
	const { theme } = useTheme();

	const [term, setTerm] = useState<{ key: string; value: string }>({
		key: 'fall2023',
		value: 'Fall 2023',
	});
	const { setAuthenticated } = useAuthContext();
	const handelItemPress = useCallback(
		(newTerm: { key: string; value: string }) => {
			const selectedTerm = newTerm.key === 'cancel' ? term : newTerm;
			setTerm(selectedTerm);
			if (ref) ref.current?.hide();
		},
		[]
	);

	const renderItem = useCallback(({ item }: any) => {
		console.log(item.status);

		return (
			<TouchableOpacity
				style={{
					padding: 16,
					backgroundColor: theme.color?.grey[200],
					marginBottom: 10,
					justifyContent: 'space-between',
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						flexDirection: 'row',
					}}>
					<View
						style={{
							borderRadius: 6,
							backgroundColor: theme.color?.primary.main,
							paddingVertical: 8,
							paddingHorizontal: 10,
						}}>
						<Text
							bold
							style={{
								color: theme.color?.common.white,
							}}>
							40%
						</Text>
					</View>
					<Text
						style={{
							marginLeft: 10,
						}}>
						Bảo vệ assignment
					</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<Text h4 bold>
						9.0
					</Text>
				</View>
			</TouchableOpacity>
		);
	}, []);
	return (
		<Container
			header={{ title: 'Ý Tưởng Sáng Tạo', isDetail: true }}
			scrollEnabled={false}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 20,
				}}>
				<View
					style={{
						alignSelf: 'center',
						borderRadius: 6,
						backgroundColor: theme.color?.success.dark,
						paddingVertical: 8,
						paddingHorizontal: 30,
					}}>
					<Text
						bold
						style={{
							color: theme.color?.common.white,
						}}>
						Pass
					</Text>
				</View>
				<Text bold h1>
					9.5
				</Text>
			</View>
			<FlashList
				data={[
					{ title: 'test', status: 0 },
					{ title: 'test', status: 1 },
					{ title: 'test', status: 2 },
				]}
				renderItem={renderItem}
				estimatedItemSize={10}
			/>
			<BottomSheetSelect
				ref={ref}
				options={OPTIONS}
				onItemPress={handelItemPress}
			/>
		</Container>
	);
};

export default TranscriptDetail;

const styles = StyleSheet.create({});
