import { Dimensions } from 'react-native';
import { Platform, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
	black: '#1B1B1B',
	white: '#fff',
	gray1: '#D7D7D7',
	gray2: '#8A8D9F',
	green: '#04764E',
	lightGreen: 'rgba(29, 191, 115, 0.1)',
	lightGreen_02: 'rgba(29, 191, 115, 0.2)',
	lightYellow: 'rgba(255,199,0, 0.1)',
	lightRed: 'rgba(254,33,33, 0.1)',
	transparent: 'rgba(0,0,0, 0)',
	lightGray: '#F6F6F6',
	lightLilac: '#F4F1FC',
	carrot: '#FE724E',
	darkBlue: '#1F1D2B',
	yellow: '#FFC700',
	red: '#FE2121',
	lightPink: '#FFEDF2',
	lightOrange: '#F6DBB3',

	shadowStartColor: 'rgb(196,196,196, 0.07)',
	shadowFinalColor: 'rgb(255, 255, 255, 0.08)',
	shadowDistance: 12,
};

export const SIZES = {
	width,
	height,

	paddingTop_01: 20,
	paddingTop_02: 30,
	paddingTop_03: 40,
	paddingVertical: 25,

	paddingTop: 25,
	paddingBottom: 25,
};

export const FONTS = {
	Poppins_Regular: {
		fontFamily: 'Poppins_Regular',
	},
	Poppins_Medium: {
		fontFamily: 'Poppins_Medium',
	},
	Poppins_Bold: {
		fontFamily: 'Poppins_Bold',
	},
	H1: {
		fontFamily: 'Poppins_Bold',
		fontSize: 30,
	},
	H2: {
		fontFamily: 'Poppins_Bold',
		fontSize: 22,
		color: COLORS.green,
		textTransform: 'capitalize',
		textAlign: 'center',
		lineHeight: 22 * 1.2,
	},
	H4: {
		fontFamily: 'Poppins_Regular',
		fontSize: 16,
		color: COLORS.gray2,
		textAlign: 'center',
		lineHeight: 16 * 1.3,
	},
};

export const SAFEAREAVIEW = {
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	DefaultBackground: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
};
