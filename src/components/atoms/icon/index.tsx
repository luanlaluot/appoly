import React from 'react';
import {
	Text as RNText,
	TextProps as RNTextProps,
	TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import withTheme from 'theme/withTheme';
import { IconProps } from './IconType';
import {
	IconButtonProps,
	TabBarItemIOSProps,
} from 'react-native-vector-icons/Icon';
import { isUndefined } from 'lodash';

const Icon = React.forwardRef(
	(props: IconProps, ref: React.ForwardedRef<Ionicons>) => {
		const { onPress, style } = props;

		return (
			<TouchableOpacity disabled={isUndefined(onPress)} onPress={onPress}>
				<Ionicons ref={ref} {...props} />
			</TouchableOpacity>
		);
	}
);

export default withTheme<IconProps>(Icon, 'Icon');
