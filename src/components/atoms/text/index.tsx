import React, { useEffect } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { TextProps } from './TextType';
import withTheme from 'theme/withTheme';

const Text = React.forwardRef(
	(props: TextProps, ref: React.ForwardedRef<RNText>) => {
		return <RNText ref={ref} {...props} />;
	}
);

export default withTheme<TextProps>(Text, 'Text');
