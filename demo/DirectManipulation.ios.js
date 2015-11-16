'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
} = React;

/*
* 1. setNativeProps
*
*/
var MyDM = React.createClass({
	handleClear() {
		console.log(this._input);
		this._input.setNativeProps({text: ''});
	},

	render() {
		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="SetNativeProps">
						<TextInput ref={component => this._input=component} style={Styles.textInput} />
						<TouchableOpacity onPress={this.handleClear}>
							<Text>Clear</Text>
						</TouchableOpacity>
					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = MyDM;
