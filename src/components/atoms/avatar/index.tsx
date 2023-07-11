import { isUndefined } from 'lodash';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import Text from '../text';
import { AvatarProps } from './AvatarType';
import { BaseComponent } from 'theme';
import withTheme from 'theme/withTheme';

const Avatar: BaseComponent<AvatarProps> = props => {
	const { containerStyle, activeStyle, name, onPress, ...rest } = props;

	return (
		<TouchableOpacity
			disabled={isUndefined(onPress)}
			onPress={onPress}
			style={containerStyle}>
			{props.source && (
				<Image {...rest} source={props.source} resizeMode="contain" />
			)}
			{name && <Text h4>{name}</Text>}
			<View style={activeStyle} />
		</TouchableOpacity>
	);
};
export default withTheme<AvatarProps>(Avatar, 'Avatar');
