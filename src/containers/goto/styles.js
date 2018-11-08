import { StyleSheet, Dimensions } from 'react-native';
// import Header from 'react-navigation'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	title: {
		width: width,
		height: 20,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#5C636E'
	}
});