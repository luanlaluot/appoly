import React from 'react';
import { BaseComponent } from '.';
import { ThemeConsumer } from './ThemeProvider';
import { palette } from './color';
import { ComponentTheme } from './ComponentTheme';
import { merge } from 'lodash';

const ThemedComponent = <T,>(
	WrappedComponent: any,
	themeKey: keyof ComponentTheme,
	displayName?: string
) => {
	return Object.assign(
		(props: any, forwardedRef: any) => {
			const { children, style, ...rest } = props;
			return (
				<ThemeConsumer>
					{({ theme }) => {
						// If user isn't using ThemeProvider
						if (!theme) {
							const newProps = {
								...rest,
								theme: { color: palette.light },
								children,
							};

							return <WrappedComponent ref={forwardedRef} {...newProps} />;
						}
						const { components, ...restTheme } = theme;

						const overrideTheme = components?.[themeKey]?.(rest, restTheme);

						const newProps = {
							theme: restTheme,
							...overrideTheme,
							style: {
								...overrideTheme?.style,
								...style,
							},
							children,
							...rest,
						};
						console.log('asdjuigasudgasjdgagjkdas', overrideTheme?.style);
						console.log('asdjuigasudgasjdgagjkdas', props?.style);

						return <WrappedComponent ref={forwardedRef} {...newProps} />;
					}}
				</ThemeConsumer>
			);
		},
		{ displayName: displayName }
	);
};

const withTheme = <T,>(
	WrappedComponent: BaseComponent<T>,
	themeKey: keyof ComponentTheme
) => {
	const name = themeKey
		? `Themed.${themeKey}`
		: `Themed.${
				WrappedComponent.displayName || WrappedComponent.name || 'Component'
		  }`;
	const Component = ThemedComponent<T>(WrappedComponent, themeKey, name);
	return React.forwardRef<any, T>(Component);
};

export default withTheme;
