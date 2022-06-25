import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import { Header, InputField, Button, Check, Camera } from '../components';
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from '../constants';

export default function SignUp() {
	const navigation = useNavigation();
	const [remember, setRemember] = useState(false);

	function renderContent() {
		return (
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flexGrow: 1,
					alignItems: 'center',
					paddingHorizontal: 30,
					paddingVertical: SIZES.paddingVertical,
				}}>
				<TouchableOpacity
					style={{
						width: 99,
						height: 99,
						backgroundColor: COLORS.gray1,
						borderRadius: 50,
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: 40,
					}}>
					<Camera />
				</TouchableOpacity>
				<InputField
					placeholder='Full Name'
					contaynerStyle={{ ...FONTS.Poppins_Regular, marginBottom: 13 }}
				/>
				<InputField
					placeholder='Phone Number'
					contaynerStyle={{ marginBottom: 13 }}
				/>
				<InputField
					placeholder='Email'
					contaynerStyle={{ ...FONTS.Poppins_Regular, marginBottom: 13 }}
				/>
				<InputField
					placeholder='Password'
					contaynerStyle={{ ...FONTS.Poppins_Regular, marginBottom: 13 }}
				/>
				<InputField
					placeholder='Confirm Password'
					contaynerStyle={{ ...FONTS.Poppins_Regular, marginBottom: 37 }}
				/>
				<View
					style={{
						width: '100%',
					}}>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							marginBottom: 18,
							alignItems: 'center',
						}}
						onPress={() => setRemember(!remember)}>
						{/* <View
							style={{
								width: 16,
								height: 16,
								borderRadius: 3,
								borderWidth: 1,
								borderColor: COLORS.green,
								marginRight: 8,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							{remember && <Check />}
						</View> */}
						<View style={{ flex: 1 }}>
							<Text
								style={{
									...FONTS.Poppins_Regular,
									fontSize: 14,
									marginLeft: 3,
									color: COLORS.gray2,
									lineHeight: 16 * 1.3,
								}}>
								By tapping Sign up you accept all our terms and condition
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<Button
					title='SIGN UP'
					containerStyle={{
						backgroundColor: COLORS.green,
						marginBottom: 28,
					}}
					onPress={() => navigation.navigate('Selectlocation')}
				/>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'flex-end',
						flex: 1,
						marginBottom: 34,
					}}>
					<Text
						style={{
							...FONTS.Poppins_Regular,
							fontSize: 16,
							color: COLORS.black,
						}}>
						Already have an account?
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
						<Text
							style={{
								...FONTS.Poppins_Bold,
								fontSize: 16,
								color: COLORS.green,
								textDecorationLine: 'underline',
							}}>
							{' '}
							Sign in!
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAwareScrollView>
		);
	}

	return (
		<SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
			<Header title='Sign Un' onPress={() => navigation.goBack()} />
			{renderContent()}
		</SafeAreaView>
	);
}
