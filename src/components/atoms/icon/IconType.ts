import { TextProps as RNTextProps } from 'react-native';
import { IconProps as BaseIconProps } from 'react-native-vector-icons/Icon';
export type IconProps = {
	onPress?: () => void;
} & BaseIconProps;
