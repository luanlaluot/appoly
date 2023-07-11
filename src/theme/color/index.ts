import { ColorModeProps, ColorProps } from './type';

export const PRIMARY: ColorModeProps = {
	lighter: '#C8FACD',
	light: '#5BE584',
	main: '#00AB55',
	dark: '#007B55',
	darker: '#005249',
};
export const SECONDARY: ColorModeProps = {
	lighter: '#D6E4FF',
	light: '#84A9FF',
	main: '#3366FF',
	dark: '#1939B7',
	darker: '#091A7A',
};
export const INFO: ColorModeProps = {
	lighter: '#D0F2FF',
	light: '#74CAFF',
	main: '#1890FF',
	dark: '#0C53B7',
	darker: '#04297A',
};
export const SUCCESS: ColorModeProps = {
	lighter: '#E9FCD4',
	light: '#AAF27F',
	main: '#54D62C',
	dark: '#229A16',
	darker: '#08660D',
};
export const WARNING: ColorModeProps = {
	lighter: '#FFF7CD',
	light: '#FFE16A',
	main: '#FFC107',
	dark: '#B78103',
	darker: '#7A4F01',
};
export const ERROR = {
	lighter: '#FFE7D9',
	light: '#FFA48D',
	main: '#FF4842',
	dark: '#B72136',
	darker: '#7A0C2E',
};

const GREY = {
	0: '#FFFFFF',
	100: '#F9FAFB',
	200: '#F4F6F8',
	300: '#DFE3E8',
	400: '#C4CDD5',
	500: '#919EAB',
	600: '#637381',
	700: '#454F5B',
	800: '#212B36',
	900: '#161C24',
};

const base: ColorProps = {
	common: {
		black: '#1A1A1A',
		white: '#FFFFFF',
	},
	primary: PRIMARY,
	secondary: SECONDARY,
	grey: GREY,
	success: SUCCESS,
	waring: WARNING,
	error: ERROR,
	action: {
		disabled: GREY[200],
	},
	background: {
		paper: '#FFFFFF',
		default: '#FFFFFF',
	},
	text: '#FFF',
};

export const palette = {
	light: {
		...base,
	},
	dark: {
		...base,
	},
};
