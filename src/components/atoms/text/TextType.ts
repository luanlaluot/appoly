import { TextProps as RNTextProps } from 'react-native';
export type TextProps = {
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	bold?: boolean;
} & RNTextProps;
