'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');

var {
	View,
	Text
} = React;

var MyPanel = React.createClass({
	render(){
		return (
			<View style={Styles.panel}>
				<View style={Styles.panelHeader}>
					<Text>{this.props.title}</Text>
				</View>
				<View style={Styles.panelBody}>
					{this.props.children}
				</View>
			</View>
		);
	}
});

module.exports = MyPanel;
