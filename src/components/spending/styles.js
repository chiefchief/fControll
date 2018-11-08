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
    title:{
        width:width,
        height:90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    summ:{
        color:'#F8B500',
        fontSize: 22
    },
    point:{
        width:5,
        height:5,
        borderRadius:5/2,
        marginRight:5
    },
    leftItems:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    allItems:{
        width:width,
        height:45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth:1,
        borderColor:'#5C636E'
    }
});
