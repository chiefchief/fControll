import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Start from './src/components/start/start';
import Login from './src/components/login/login';
import Main from './src/components/main/main';
import Spending from './src/components/spending/spending';
import Budget from './src/components/budget/budget';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AllReducers from './src/reducers';

const store = createStore(AllReducers);

console.disableYellowBox = true;
console.ignoredYellowBox = [ 'Warning: ReactNative.createElement' ];

const FinancialControl = createStackNavigator(
	{
		Start: Start,
		Login: Login,
		Main: Main,
		Spending: Spending,
		Budget: Budget
	},
	{
		initialRouteName: 'Main'
	}
);

const TabNav = createBottomTabNavigator({
	Start: Start,
	Overview: FinancialControl,
	Spending: Spending
});

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<FinancialControl />
				{/* <TabNav /> */}
			</Provider>
		);
	}
}

AppRegistry.registerComponent(appName, () => App);
