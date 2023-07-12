import Text from 'components/atoms/text';
import React, {
	ForwardedRef,
	PropsWithChildren,
	useCallback,
	useMemo,
} from 'react';
import { TouchableOpacity, View } from 'react-native';
import ActionSheet, {
	ActionSheetProps,
	ActionSheetRef,
} from 'react-native-actions-sheet';
import { useTheme } from 'theme/ThemeProvider';

type Option = {
	key: string;
	value: string;
};

export type BottomSheetSelectProps = {
	options?: Option[];
	onItemPress?(option: Option): void;
} & ActionSheetProps &
	PropsWithChildren;

const BottomSheetSelect = React.forwardRef(
	(props: BottomSheetSelectProps, ref: ForwardedRef<ActionSheetRef>) => {
		const { options, onItemPress } = props;
		const { theme } = useTheme();
		const renderOptions = useMemo(() => {
			return options?.concat({
				key: 'cancel',
				value: 'Huỷ',
			});
		}, []);

		const handelItemPress = useCallback((item: Option) => {
			onItemPress?.(item);
		}, []);
		return (
			<ActionSheet ref={ref}>
				<View style={{ padding: 20 }}>
					<View style={{ marginBottom: 20 }}>
						<Text bold>Lựa chọn cơ sở</Text>
					</View>
					<View>
						{renderOptions?.map(option => {
							const onItemPress = () => handelItemPress(option);
							return (
								<TouchableOpacity
									key={option.key}
									style={{
										paddingVertical: 10,
									}}
									onPress={onItemPress}>
									<Text
										style={{
											color:
												option.key === 'cancel'
													? theme?.color?.error.main
													: theme?.color?.common.black,
										}}>
										{option.value}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
			</ActionSheet>
		);
	}
);

export default BottomSheetSelect;
