import React, { Component } from 'react';
import { TouchableOpacity, Button, StatusBar, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
// import ProgressCircle from 'react-native-progress-circle';
import PieChart from 'react-native-pie-chart';

const PickerValues = [
	{ label: 'Food', color: '#FFE51D', price: '397,21' },
	{ label: 'Home', color: '#F8B500', price: '350,00' },
	{ label: 'Restaurant', color: '#F89900', price: '98,00' },
	{ label: 'Education', color: '#F88600', price: '17,00' }
];

class Spending extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'SPENDING',
			// headerTransparent: true,
			headerStyle: { backgroundColor: '#F7F7F7', elevation: 0 },
			headerLeft: <Button onPress={() => navigation.navigate('Main')} title="<" color="#777" />
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			pickValues: PickerValues,
			colours: [],
			values: []
		};
	}

	componentWillMount() {
		let a = this.parseObject(this.state.pickValues, 'color');
		let b = this.parseObject(this.state.pickValues, 'price');
		this.setState({
			colours: this.parseObject(this.state.pickValues, 'color'),
			values: this.parseObject(this.state.pickValues, 'price')
		});
	}
	parseObject(object, label) {
		let array = [];
		object.forEach((item) => {
			if (label == 'color') {
				array.push(item.color);
			} else {
				array.push(parseFloat(item.price));
			}
		});
		return array;
	}
	

	render() {
		const chart_wh = 150;
		const series = [ 123, 321, 123, 789, 537 ];
		const sliceColor = [ '#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800' ];
		console.log(this.state.colours, 'COLOURS');
		console.log(this.state.values, 'VALUESSSS');
		console.log(sliceColor, 'SLICE');
		return (
			<View style={styles.container}>
				<View style={styles.title}>
					<Text>September</Text>
					<Text style={styles.summ}>$13,020</Text>
				</View>
				<PieChart
					chart_wh={chart_wh}
					// series={series}
					// sliceColor={sliceColor}
					series={this.state.values}
					sliceColor={this.state.colours}
					doughnut={true}
					coverRadius={0.45}
					coverFill={'#FFF'}
				/>

				{this.state.pickValues.map((item) => {
					return (
						<TouchableOpacity key={item.label} onPress={() => {}} style={styles.allItems}>
							<View style={styles.leftItems}>
								<View style={[ styles.point, { backgroundColor: item.color } ]} />
								<Text>{item.label}</Text>
							</View>
							<Text style={styles.leftItems}>{'$' + item.price}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Spending);
