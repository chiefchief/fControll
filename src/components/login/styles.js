import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	linear: {
		width: width,
		height: height
	},
	textIn: {
		width: width * 0.85,
		height: 40,
		backgroundColor: '#aaa',
		marginBottom: 10
	},
	login: {
		width: width * 0.85,
		margin: width * 0.075,
		backgroundColor: '#888',
		borderRadius: 5,
		height: 40
	}
});
