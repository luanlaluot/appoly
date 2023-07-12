import { moderateScale } from 'react-native-size-matters';
import { Theme } from '..';
import { ButtonProps } from 'components/atoms/button/ButtonType';

export const Button = (
	props: ButtonProps,
	theme: Theme
): Partial<ButtonProps> => {
	const colorOutlined =
		props?.loading || props.disabled
			? theme?.color?.action.disabled
			: theme.color?.common.white;
	const colorContained =
		props?.loading || props.disabled
			? // ? theme.color?.primary.lighter
			  theme?.color?.action.disabled
			: theme?.color?.primary.main;
	const colorText = theme.color?.common.white;
	const backgroundColor =
		props.variant === 'outlined'
			? colorOutlined
			: props.variant === 'text'
			? colorText
			: colorContained;
	return {
		activeOpacity: 0.5,
		style: {
			backgroundColor: backgroundColor,
			borderRadius: 6,
			borderColor: !(props.variant === 'outlined' || props.variant === 'text')
				? theme.color?.common.white
				: theme?.color?.primary.main,
			borderWidth: props.variant === 'outlined' ? 1 : 0,
			padding: moderateScale(12),
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
		},
		labelStyle: {
			color: props.disabled
				? props.variant === 'text'
					? theme.color?.primary.light
					: theme.color?.grey[500]
				: props.variant === 'outlined' || props.variant === 'text'
				? theme.color?.primary.main
				: theme.color?.common.white,
			fontSize: moderateScale(14),
			marginHorizontal: 10,
			fontWeight: 'bold',
		},
	};
};
