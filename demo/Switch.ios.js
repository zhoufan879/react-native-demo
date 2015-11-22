'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	Image,
	ScrollView,
	SwitchIOS,
} = React;

/*
* 开关
*
*/
var MySwitch = React.createClass({
	getInitialState() {
		return {
			_selected: true,
		}
	},

	render() {
		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="SwitchIOS default">

						<SwitchIOS 
							value={this.state._selected}
							onValueChange={(v)=>this.setState({_selected:v})}
						/>

						<View>
							<Text style={{margin: 10}}>Value: {''+this.state._selected}</Text>
						</View>

					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = MySwitch;
