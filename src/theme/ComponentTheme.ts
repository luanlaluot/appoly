import { ButtonProps } from 'components/atoms/button/ButtonType';
import { InputProps } from 'components/atoms/input/InputType';
import { TextProps } from 'components/atoms/text/TextType';
import { AvatarProps } from 'components/atoms/avatar/AvatarType';
import { IconProps } from 'components/atoms/icon/IconType';

export type ComponentTheme = {
	Button: Partial<ButtonProps>;
	Input: Partial<InputProps>;
	Text: Partial<TextProps>;
	Avatar: Partial<AvatarProps>;
	Icon: Partial<IconProps>;
	[key: string]: Partial<any>;
};
