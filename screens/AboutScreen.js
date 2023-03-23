import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Application from 'expo-application';

const AboutScreen = () => {
	const buildVersion = Application.nativeBuildVersion;
	const appVersion = Application.nativeApplicationVersion;

	return (
		<View style={styles.screen}>
      <Text style={styles.title}> Рецепти</Text>
      <Text> версия на приложението:{appVersion}</Text>
      <Text> buildVersion: {buildVersion}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
	},
});

export default AboutScreen;
