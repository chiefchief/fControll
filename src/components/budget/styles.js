import { StyleSheet, Dimensions } from 'react-native';
// import Header from 'react-navigation'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F7F7F7'
		// backgroundColor: '#000'
	},
	title: {
		width: width,
		height: 90,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#FFFFFF'
	},
	everyItem: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	summ: {
		color: '#F8B500',
		fontSize: 22
	}
});
