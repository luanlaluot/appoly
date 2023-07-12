import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';

const Transcript = () => {
	const { setAuthenticated } = useAuthContext();
	return <Container header={{ title: 'Bảng điểm' }}></Container>;
};

export default Transcript;

const styles = StyleSheet.create({});
