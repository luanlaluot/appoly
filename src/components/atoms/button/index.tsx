import React, { Fragment, useCallback, useMemo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from './ButtonType';
import { BaseComponent } from 'theme';
import withTheme from 'theme/withTheme';

const Button: BaseComponent<ButtonProps> = props => {
	const {
		variant = 'contained',
		disabled = false,
		loading = false,
		label,
		theme,
		labelStyle,
		style,
		iconStart,
		iconEnd,
		...rest
	} = props;
	const getIconColor = useMemo(() => {
		return variant === 'outlined' || variant === 'text'
			? disabled
				? theme?.color?.common.white
				: theme?.color?.primary.main
			: disabled
			? theme?.color?.primary.main
			: theme?.color?.common.white;
	}, [disabled, theme, variant]);

	const Icon = useCallback(
		({ element }: { element: any }) => {
			return (
				element &&
				React.cloneElement(element, {
					color: getIconColor,
				})
			);
		},
		[getIconColor]
	);

	return (
		<TouchableOpacity disabled={loading || disabled} style={style} {...rest}>
			{loading ? (
				<ActivityIndicator color={theme?.color?.primary.main} />
			) : (
				<Fragment>
					<Icon element={iconStart} />
					<Text style={labelStyle}>{label}</Text>
					<Icon element={iconEnd} />
				</Fragment>
			)}
		</TouchableOpacity>
	);
};
export default withTheme<ButtonProps>(Button, 'Button');
