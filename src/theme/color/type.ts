import { ColorValue } from 'react-native';
export type ColorModeProps = {
	lighter: ColorValue;
	light: ColorValue;
	main: ColorValue;
	dark: ColorValue;
	darker: ColorValue;
};

export type ColorProps = {
	common: {
		black: ColorValue;
		white: ColorValue;
	};
	primary: ColorModeProps;
	secondary: ColorModeProps;
	success: ColorModeProps;
	waring: ColorModeProps;
	error: ColorModeProps;
	background: {
		paper: ColorValue;
		default: ColorValue;
	};
	text: ColorValue;
	grey: {
		[key: number]: ColorValue;
	};
	action: {
		disabled: ColorValue;
	};
};
