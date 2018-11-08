import React, { Component } from 'react';
import { TextInput, StatusBar, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { DAY, NIGHT } from '../../constants/colors';

class Login extends Component {
	static navigationOptions = {
		title: 'Login',
		headerTransparent: true,
		headerStyle: { marginTop: StatusBar.currentHeight }
	};
	state = {
		login: '',
		password: '',
		tryLogIn: false
	};
	logIn() {
		this.state.login == 'admin' && this.state.password == '12345'
			? this.props.navigation.navigate('Main')
			: this.setState({ tryLogIn: true });
	}

	render() {
		console.log(this.state.login, 'LOGIN');
		console.log(this.state.password, 'PASSWORD');
		return (
			<LinearGradient
				style={styles.linear}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
				colors={this.props.backgroundApp ? DAY : NIGHT}
			>
				<StatusBar translucent={true} backgroundColor={'transparent'} />
				<KeyboardAvoidingView style={styles.container} behavior="padding">
					{/* <View style={styles.container}> */}
					{this.state.tryLogIn ? <Text>Oooooops</Text> : null}
					<TextInput
						keyboardAppearance={'light'}
						maxLength={12}
						onChangeText={(login) => this.setState({ login })}
						style={styles.textIn}
						onFocus={() => this.setState({ tryLogIn: false })}
					/>
					<TextInput
						keyboardAppearance={'light'}
						maxLength={12}
						onChangeText={(password) => this.setState({ password })}
						style={styles.textIn}
						onFocus={() => this.setState({ tryLogIn: false })}
					/>
					<TouchableOpacity style={styles.login} onPress={() => this.logIn()}>
						<Text>Login</Text>
					</TouchableOpacity>

					{/* </View> */}
				</KeyboardAvoidingView>
			</LinearGradient>
		);
	}
}

const mapStateToProps = (state) => ({ backgroundApp: state.backgroundApp });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
