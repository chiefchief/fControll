import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class GoTo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		return (
			<TouchableOpacity onPress={()=>this.props.goto()} style={styles.title}>
                <Text>{this.props.title}</Text>
                <Text>></Text>
            </TouchableOpacity>
		);
	}
}