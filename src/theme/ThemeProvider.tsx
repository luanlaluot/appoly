/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { merge } from 'lodash';
import { Theme } from '.';
import { palette } from './color';
import { ColorProps } from './color/type';
import { Button } from './components';
import { Input } from './components/Input';
import { ComponentTheme } from './ComponentTheme';
import { Text } from './components/Text';
import { Avatar } from './components/Avatar';
import { Icon } from './components/Icon';
import { SpacingProps, spacing } from './base/spacing';

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

type ComponentFunctionProps<Components = ComponentTheme> = {
	[Key in keyof Components]?: (
		props: Components[Key],
		theme: Theme
	) => Components[Key];
};

export interface CreateThemeOptions extends RecursivePartial<Theme> {
	color?: ColorProps;
	spacing?: SpacingProps;
	components?: ComponentFunctionProps;
}

export interface ThemeOptions extends Theme {
	color?: ColorProps;
	components?: ComponentFunctionProps;
}

export type ThemeProps<T = {}> = {
	theme: ThemeOptions & T;
};

export type ThemeProviderContext<T = {}> = ThemeProps<ThemeOptions & T>;

export const ThemeContext = React.createContext<ThemeProviderContext>(
	{} as ThemeProviderContext
);

export const createTheme = (
	theme: CreateThemeOptions = {}
): CreateThemeOptions => {
	return {
		...theme,
		...merge<CreateThemeOptions, CreateThemeOptions>(
			{
				color: palette.light,
				spacing: spacing,
				components: {
					'Button': Button,
					'Input': Input,
					'Text': Text,
					'Avatar': Avatar,
					'Icon': Icon,
				},
			},
			{
				color: theme.color,
				spacing: theme.spacing,
				components: theme.components || {},
			}
		),
	};
};

const defaultTheme = createTheme({});
export const useTheme = () => React.useContext(ThemeContext);
export const ThemeProvider: React.FC<{
	theme?: CreateThemeOptions;
	children?: React.ReactNode;
}> = ({ theme = defaultTheme, children }) => {
	const value = React.useMemo(
		() => ({
			theme: createTheme(theme),
		}),
		[]
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export const ThemeConsumer = ThemeContext.Consumer;

// interface UseTheme {
// 	replaceTheme: ReplaceTheme;
// 	updateTheme: UpdateTheme;
// 	theme: {
// 		colors: Colors;
// 	} & Theme;
// }

// export const useTheme = (): UseTheme => {
// 	return useContext(ThemeContext);
// };

// export const useThemeMode = () => {
// 	const themeContext = useContext(ThemeContext);

// 	const setMode = useCallback(
// 		(colorMode: ThemeMode) => {
// 			themeContext?.updateTheme({ mode: colorMode });
// 		},
// 		[themeContext]
// 	);

// 	return useMemo(
// 		() => ({
// 			mode: themeContext?.theme?.mode,
// 			setMode,
// 		}),
// 		[setMode, themeContext?.theme?.mode]
// 	);
// };
