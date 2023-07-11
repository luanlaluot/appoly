import {
	ImageProps,
	ImageSourcePropType,
	StyleProp,
	ViewStyle,
} from 'react-native';

export type AvatarProps = {
	size?: number;
	active?: boolean;
	source?: ImageSourcePropType;
	name?: string;
	rounded?: boolean;
	containerStyle?: StyleProp<ViewStyle>;
	activeStyle?: StyleProp<ViewStyle>;
	onPress?: () => void;
} & Omit<ImageProps, 'source'>;
