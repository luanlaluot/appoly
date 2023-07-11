import { moderateScale } from 'react-native-size-matters';
import { Theme } from '..';
import { Platform } from 'react-native';
import { InputProps } from 'components/atoms/input/InputType';

export const Input = (props: InputProps, theme: Theme): Partial<InputProps> => {
	return {
		containerStyle: {
			marginBottom: moderateScale(16),
			width: '100%',
		},
		inputStyle: {
			flexDirection: 'row',
			paddingHorizontal: moderateScale(20),
			paddingVertical: Platform.select({
				android: moderateScale(10),
				ios: moderateScale(10),
			}),
			borderRadius: 4,
			backgroundColor: '#00000010',
			justifyContent: 'center',
			alignItems: 'center',
		},
		labelStyle: {
			fontSize: moderateScale(14),
			marginBottom: moderateScale(3),
			color: theme?.color?.common.black,
			fontWeight: 'bold',
		},
		style: {
			padding: 2,
			flex: 1,
			marginLeft: 10,
			marginRight: 10,
		},
	};
};
