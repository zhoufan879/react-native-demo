'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	Image,
	ScrollView,
	SliderIOS,
} = React;

/*
* 滑动条
*
*/
var MySlider = React.createClass({
	getInitialState() {
		return {
			_value: 0,
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

					<MyPanel title="Slider default">

						<View>
							<Text style={{textAlign: 'center', margin: 10}}>{this.state._value}</Text>
						</View>

						<SliderIOS minimumValue={-10} maximumValue={10} step={5} onValueChange={(v)=>this.setState({_value:v})}/>

					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = MySlider;
