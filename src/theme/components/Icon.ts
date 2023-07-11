import { moderateScale } from 'react-native-size-matters';
import { Theme } from '..';
import { IconProps } from 'components/atoms/icon/IconType';

export const Icon = (props: IconProps, theme: Theme): Partial<IconProps> => {
	return {
		size: moderateScale(24),
	};
};
