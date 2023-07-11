import { AvatarProps } from 'components/atoms/avatar/AvatarType';
import { Theme } from '..';

export const Avatar = (
	props: AvatarProps,
	theme: Theme
): Partial<AvatarProps> => {
	const { size = 50, active, rounded } = props;
	return {
		containerStyle: {
			height: size,
			width: size,
			borderRadius: rounded ? size / 2 : 0,
			backgroundColor: theme?.color?.grey[300],
			justifyContent: 'center',
			alignItems: 'center',
		},
		activeStyle: {
			display: active ? 'flex' : 'none',
			position: 'absolute',
			bottom: 0,
			margin: 0,
			right: 0,
			height: size * 0.3,
			width: size * 0.3,
			borderRadius: (size * 0.3) / 2,
			backgroundColor: theme?.color?.success.main,
			borderWidth: 3,
			borderColor: theme?.color?.common.white,
		},
		style: {
			height: size,
			width: size,
			borderRadius: rounded ? size / 2 : 0,
		},
	};
};
