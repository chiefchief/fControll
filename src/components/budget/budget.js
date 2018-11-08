import React, { Component } from 'react';
import { TouchableOpacity, Button, StatusBar, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import GoTo from '../../containers/goto/goto';

const PickerValues = [
	{ label: 'Food', color: '#FFE51D', price: '$397,21' },
	{ label: 'Home', color: '#F8B500', price: '$350,00' },
	{ label: 'Restaurant', color: '#F89900', price: '$98,00' },
	{ label: 'Education', color: '#F88600', price: '$17,00' }
];

class Budget extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'B U D G E T',
			// headerTransparent: true,
			headerStyle: { backgroundColor: '#F7F7F7', elevation: 0 },
			headerLeft: <Button onPress={() => navigation.navigate('Main')} title="<" color="#777" />
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			pickValues: PickerValues
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.title}>
					<View style={styles.everyItem}>
						<Text>Credit Cards</Text>
						<Text style={styles.summ}>$0</Text>
					</View>
					<View style={styles.everyItem}>
						<Text>Cash</Text>
						<Text style={styles.summ}>$13,020</Text>
					</View>
					<View style={styles.everyItem}>
						<Text>Investments</Text>
						<Text style={styles.summ}>$0</Text>
					</View>
				</View>
				<GoTo goto={() => this.props.navigation.navigate('Budget')} title={'Budget'} />

				{this.state.pickValues.map((item) => {
					return (
						<TouchableOpacity onPress={() => {}} style={styles.allItems}>
							<View style={styles.leftItems}>
								<View style={[ styles.point, { backgroundColor: item.color } ]} />
								<Text>{item.label}</Text>
							</View>
							<Text style={styles.leftItems}>{item.price}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Budget);
