import { moderateScale } from 'react-native-size-matters';
export type SpacingProps = {
	screen: number;
};

export const spacing: SpacingProps = {
	screen: moderateScale(26),
};
