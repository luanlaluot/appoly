import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';

const Schedule = () => {
	const { setAuthenticated } = useAuthContext();
	return <Container header={{ title: 'Lịch học' }}></Container>;
};

export default Schedule;

const styles = StyleSheet.create({});
