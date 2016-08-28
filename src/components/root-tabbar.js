'use strict';

import React, { Component } from 'react';
import { TabBarIOS, StyleSheet, Text, View } from 'react-native';

export default class RootTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: "TodoTab"
		}
	}
	
	render() {
    	return (
    		<TabBarIOS
    			unselectedTintColor = 'gray'
    			tintColor = 'blue'
    			barTintColor="white">
    			<TabBarIOS.Item 
    				title = 'Todo'
    				systemIcon = 'bookmarks'
    				selected = {this.state.selectedTab == 'TodoTab'}
    				onPress = {() => {
    					this.setState({
    						selectedTab: 'TodoTab'
    					});
    				}}>
    			{this._renderItem('Todo')}
    			</TabBarIOS.Item>
    			<TabBarIOS.Item 
    				title = 'Finished'
    				systemIcon = 'history'
    				selected = {this.state.selectedTab == 'FinishedTab'}
    				onPress = {() => {
    					this.setState({
    						selectedTab: 'FinishedTab'
    					});
    				}}>
    			{this._renderItem('Finished')}
    			</TabBarIOS.Item>
    		</TabBarIOS>
      		
    	);
 	}

 	_renderItem(title) {
 		return (
 			<View style={styles.view}>
 				<Text style={styles.text}>{title} world!</Text>
 				<Text style={styles.text}>{title} world!</Text>
 				<Text style={styles.text}>{title} world!</Text>
 			</View>
 		);
 	}
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'red',
		fontSize: 20,
	}
});

