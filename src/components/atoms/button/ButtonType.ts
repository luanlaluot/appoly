import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacityProps } from 'react-native/types';
import { Theme } from 'theme';

export type ButtonProps = {
	/**
	 * @outlined
	 */
	variant?: 'contained' | 'outlined' | 'text';
	/**
	 * Loading
	 */
	loading?: boolean;
	/**
	 * Text to show inside the button
	 */
	label?: string;
	/**
	 * Icon on the left side
	 */
	iconStart?: JSX.Element;
	/**
	 *	Icon on the right side
	 */
	iconEnd?: JSX.Element;
	/**
	 * Styling with theme
	 */
	styled?: ({ theme }: { theme?: Theme }) => StyleProp<ViewStyle>;
	/**
	 * Label of button style
	 */
	labelStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;
