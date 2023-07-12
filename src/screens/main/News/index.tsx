import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from 'layout/container';
import Button from 'components/atoms/button';
import { showMessage } from 'react-native-flash-message';
import { useAuthContext } from 'provider/AuthProvider';

const News = () => {
	const { setAuthenticated } = useAuthContext();
	return <Container header={{ title: 'Bảng tin' }}></Container>;
};

export default News;

const styles = StyleSheet.create({});
