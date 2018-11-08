import React, { Component } from 'react';
import { Platform, Button, StatusBar, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import PieChart from 'react-native-pie-chart';

class Main extends Component {
	static navigationOptions = ({ navigation }) => {
		console.log(navigation, 'NAVI');
		return {
			title: 'Main',
			headerTransparent: true,
			headerStyle: { marginTop: StatusBar.currentHeight },
			headerLeft: <Button onPress={() => navigation.navigate('Spending')} title="<<" color="#777" />
		};
	};
	state = {
		percentArray: [ 5, 14, 33, 23, 24 ]
	};

	summArray(array) {
		var sum = 0;
		for (var i = 0; i < array.length; i++) {
			sum += array[i];
		}
		return sum;
	}

	render() {
		const chart_wh = 150;
		const series = [ 123, 321, 123, 789, 537 ];
		const sliceColor = [ '#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800' ];

		this.summArray(this.state.percentArray);
		return (
			<View style={styles.container}>
				<PieChart
					chart_wh={chart_wh}
					series={series}
					sliceColor={sliceColor}
					doughnut={true}
					coverRadius={0.45}
					coverFill={'#FFF'}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Main);
