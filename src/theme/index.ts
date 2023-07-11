import { SpacingProps } from './base/spacing';
import { ColorProps } from './color/type';

export type Theme = {
	color?: ColorProps;
	spacing?: SpacingProps;
};
export type Spacing = {};

export type BaseComponent<T> = React.FunctionComponent<
	T & {
		theme?: Theme;
		children?: React.ReactNode;
	}
>;
