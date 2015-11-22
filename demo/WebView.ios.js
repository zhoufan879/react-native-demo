'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	ScrollView,
	WebView,
} = React;

/*
* 浏览器
*
*/
var MyWebView = React.createClass({
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

					<MyPanel title="WebView">

						<WebView 
							style={{height: 500}}
							url="http://www.baidu.com"
						/>

					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = MyWebView;
