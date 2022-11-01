import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

// enableScreens();

const rootReducer = combineReducers({
	meals: mealsReducer,
});

const store = createStore(rootReducer);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				//Preloading fonts
				await Font.loadAsync({
					'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
					'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
					'moonlight': require('./assets/fonts/Moonlight.ttf'),
				});
			} catch (err) {
				console.warn(err);
			} finally {
				setFontLoaded(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontLoaded]);

	if (!fontLoaded) {
		return null;
	}

	return (
		<Provider store={store}>
			<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<MealsNavigator />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'moonlight',
	},
});
