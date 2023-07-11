import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { Theme } from 'theme';

export type InputProps = {
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
	 * On click icon on the left side
	 */
	iconStartPress?: () => void;
	/**
	 *	Icon on the right side
	 */
	iconEndPress?: () => void;
	/**
	 * Input style
	 */
	touchable?: boolean;
	/**
	 * Input style
	 */
	onPress?: () => void;
	/**
	 * Styling with theme
	 */
	styled?: ({ theme }: { theme?: Theme }) => StyleProp<ViewStyle>;
	/**
	 * Label of button style
	 */
	containerStyle?: StyleProp<TextStyle>;
	/**
	 * Label of button style
	 */
	labelStyle?: StyleProp<TextStyle>;
	/**
	 * Input style
	 */
	inputStyle?: StyleProp<TextStyle>;
} & TextInputProps;
