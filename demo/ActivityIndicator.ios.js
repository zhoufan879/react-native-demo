'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	ActivityIndicatorIOS,
	ScrollView,
} = React;

/*
* 1. default 
* 2. color 
* 3. Large
*/
var MyLoader = React.createClass({
	render() {
		return (
	        <View style={Styles.content}>
				<MyPanel title="Default">
					<ActivityIndicatorIOS />
				</MyPanel>

				<MyPanel title="Color * 3">
					<View style={{flexDirection:'row'}}>
						<ActivityIndicatorIOS color="red"/>
						<ActivityIndicatorIOS color="blue"/>
						<ActivityIndicatorIOS color="green"/>
						<ActivityIndicatorIOS color="grey"/>
						<ActivityIndicatorIOS color="black"/>
					</View>
				</MyPanel>

				<MyPanel title="Large">
					<ActivityIndicatorIOS size='large' />
				</MyPanel>
			</View>
		)
	}
});

module.exports = MyLoader;
