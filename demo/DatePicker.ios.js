'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	DatePickerIOS,
	ScrollView,
} = React;

/*
* 1. Date + Time
* 2. Date
* 3. Time
*/
var MyDatePicker = React.createClass({
	getInitialState() {
		return {
			_date: new Date(),
			_timezone: undefined,
		}
	},

	_handleDateChange(d) {
		this.setState({_date: d});
	},

	render() {
		return (

		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="Date + Time">
						
						<DatePickerIOS 
							date={this.state._date} 
							mode="datetime" 
							onDateChange={this._handleDateChange}
						/>

					</MyPanel>

					<MyPanel title="Date">
						
						<DatePickerIOS 
							date={this.state._date} 
							mode="date" 
							onDateChange={this._handleDateChange}
						/>

					</MyPanel>

					<MyPanel title="Time">
						
						<DatePickerIOS 
							date={this.state._date} 
							mode="time" 
							onDateChange={this._handleDateChange}
						/>

					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = MyDatePicker;
