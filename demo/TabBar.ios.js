'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	Image,
	TabBarIOS,
} = React;

/*
* 选项卡
*
*/
var MyTabBarIOS = React.createClass({
	getInitialState() {
		return {
			_color: 'blue',

			_blue: true,
			_pink: false,
			_red : false,
		}
	},

	_renderContent() {
		return (
			<View style={{flex: 1, backgroundColor: this.state._color}}>
			</View>
		)
	},

	render() {
		return (

			<TabBarIOS>
				<TabBarIOS.Item 
					title="Chats" 
					badge="..."
					onPress={()=>this.setState({_color:'blue', _blue: true, _pink: false, _red: false})} 
					selected={this.state._blue}
				>
					{this._renderContent()}
				</TabBarIOS.Item>

				<TabBarIOS.Item 
					title="Contacts" 
					onPress={()=>this.setState({_color:'pink', _blue: false, _pink: true, _red: false})}
					selected={this.state._pink}
				>
					{this._renderContent()}
				</TabBarIOS.Item>

				<TabBarIOS.Item 
					title="Discover" 
					onPress={()=>this.setState({_color:'red', _blue: false, _pink: false, _red: true})}
					selected={this.state._red}
				>
					{this._renderContent()}
				</TabBarIOS.Item>

				<TabBarIOS.Item 
					title="Me" 
					onPress={()=>this.setState({_color:'red', _blue: false, _pink: false, _red: true})}
					selected={this.state._red}
				>
					{this._renderContent()}
				</TabBarIOS.Item>
			</TabBarIOS>

		)
	}
});

module.exports = MyTabBarIOS;
