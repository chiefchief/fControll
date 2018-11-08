import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { DAY, NIGHT } from '../../constants/colors';

// reducers
import { updateTime, setTime } from '../../reducers/backgroundApp';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

class Start extends Component {
	static navigationOptions = () => ({
		header: null
	});

	componentWillMount() {
		this.props.setTime(new Date().getHours() >= 6 && new Date().getHours() <= 19 ? true : false);
		// this.props.updateTime();
		// console.log(new Date().getHours(), 'HELLLO');
	}
	render() {
		return (
			<LinearGradient
				style={styles.linear}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
				colors={this.props.backgroundApp ? DAY : NIGHT}
			>
				<StatusBar translucent={true} backgroundColor={'transparent'} />
				<View style={styles.container}>
					<Text style={styles.welcome}>Welcome to React Native!</Text>
					<Text style={styles.instructions}>To get started, edit App.js</Text>
					<Text style={styles.instructions}>{instructions}</Text>
					<Button title="go Login" onPress={() => this.props.navigation.navigate('Login')} />
				</View>
			</LinearGradient>
		);
	}
}

const mapStateToProps = (state) => ({
	backgroundApp: state.backgroundApp
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ setTime, updateTime }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Start);
