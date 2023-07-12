import React, { useCallback } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Text from '../text';
import { InputProps } from './InputType';
import { BaseComponent } from 'theme';
import withTheme from 'theme/withTheme';
import { isUndefined } from 'lodash';
import { moderateScale } from 'react-native-size-matters';

const Input: BaseComponent<InputProps> = React.forwardRef(
	(props: InputProps, ref: React.ForwardedRef<TextInput>) => {
		const {
			label,
			iconStart,
			iconStartPress,
			iconEndPress,
			iconEnd,
			labelStyle,
			inputStyle,
			containerStyle,
			style,
			touchable,
			onPress,
			value,
			...rest
		} = props;
		const Icon = useCallback(
			({ element, onPress }: { element: any; onPress?: () => void }) => {
				return (
					element && (
						<TouchableOpacity disabled={!onPress} onPress={onPress}>
							{React.cloneElement(element, { color: 'black' })}
						</TouchableOpacity>
					)
				);
			},
			[]
		);

		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>

				<TouchableOpacity
					style={inputStyle}
					disabled={!touchable && isUndefined(onPress)}
					onPress={onPress}>
					{!props.multiline && (
						<Icon element={iconStart} onPress={iconStartPress} />
					)}
					{touchable ? (
						<View style={{ flex: 1 }}>
							<Text>{value}</Text>
						</View>
					) : (
						<TextInput ref={ref} style={style} autoCorrect={false} {...rest} />
					)}
					{!props.multiline && (
						<Icon element={iconEnd} onPress={iconEndPress} />
					)}
				</TouchableOpacity>
			</View>
		);
	}
);

export default withTheme<InputProps>(Input, 'Input');
