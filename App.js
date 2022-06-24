import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_BlackRegular: require('./src/assets/fonts/Poppins-Black.ttf'),
		Poppins_Medium: require('./src/assets/fonts/Poppins-Medium.ttf'),
		Poppins_Regular: require('./src/assets/fonts/Poppins-Regular.ttf'),
		Poppins_Bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
		Poppins_SemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return <AppNavigation />;
	}
}
