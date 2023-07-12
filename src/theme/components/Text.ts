import { moderateScale } from 'react-native-size-matters';
import { Theme } from '..';
import { TextProps } from 'components/atoms/text/TextType';

export const Text = (props: TextProps, theme: Theme): Partial<TextProps> => {
	const { h1, h2, h3, h4, h5, bold } = props;
	const getTextSize = () => {
		switch (true) {
			case h1:
				return moderateScale(55);
			case h2:
				return moderateScale(45);
			case h3:
				return moderateScale(35);
			case h4:
				return moderateScale(25);
			case h5:
				return moderateScale(12);
			default:
				return moderateScale(12);
		}
	};
	return {
		style: {
			fontSize: getTextSize(),
			lineHeight: getTextSize() + 8,
			fontWeight: bold ? 'bold' : 'normal',
			color: theme?.color?.common.black,
		},
	};
};
