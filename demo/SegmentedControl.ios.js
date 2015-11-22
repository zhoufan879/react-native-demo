'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	Image,
	ScrollView,
	SegmentedControlIOS,
} = React;

/*
* 按钮组
*
*/
var MySegmentedControl = React.createClass({
	getInitialState() {
		return {
			_selected: 0,
			_value: 'one',
		}
	},

	_handleChange(event){
		this.setState({
			_selected: event.nativeEvent.selectedSegmentIndex
		});
	},

	_handleValueChange(value){
		this.setState({
			_value: value,
		});
	},

	render() {
		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="2 Btn demo">

						<SegmentedControlIOS 
							selectedIndex={this.state._selected}
							values={['one', 'two']}
							onChange={this._handleChange} 
							onValueChange={this._handleValueChange}
						/>

						<View>
							<Text>Selected Index: [{this.state._selected + ' - ' +this.state._value}]</Text>
						</View>

					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = MySegmentedControl;
