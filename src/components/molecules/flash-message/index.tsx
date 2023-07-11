import { StyleSheet, Text, View } from 'react-native';
import React, { ForwardedRef } from 'react';
import Message, { FlashMessageProps } from 'react-native-flash-message';

const FlashMessage = React.forwardRef(
	(props: FlashMessageProps, ref: ForwardedRef<Message>) => {
		return <Message ref={ref} position="top" {...props} />;
	}
);

export default FlashMessage;

const styles = StyleSheet.create({});
