'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');

var {
	View,
	Text
} = React;

var MyView = React.createClass({
	render() {
		return (
			<View style={[Styles.container, Styles.center]}>
				<Text>Welcome to zhoufan879's react-native</Text>
			</View>
		)
	}
});

module.exports = MyView;
