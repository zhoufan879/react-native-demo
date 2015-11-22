'use strict';

var React = require('react-native');
var Styles = require('./styles/index.js');
var MyView = require('./demo/View.ios.js');
var MyText = require('./demo/Text.ios.js');
var MyImage = require('./demo/Image.ios.js');
var MyDM = require('./demo/DirectManipulation.ios.js');
var MyLoader = require('./demo/ActivityIndicator.ios.js');
var MyDatePicker = require('./demo/DatePicker.ios.js');
var MyMapView = require('./demo/MapView.ios.js');
var ＭyPicker = require('./demo/Picker.ios.js');
var ＭyPicker2 = require('./demo/Picker2.ios.js');
var MyProgress = require('./demo/Progress.ios.js');
var MyScroll = require('./demo/ScrollView.ios.js');
var MySegmentedControl = require('./demo/SegmentedControl.ios.js');
var MySlider = require('./demo/Slider.ios.js');
var MySwitch = require('./demo/Switch.ios.js');
var MyTabBarIOS = require('./demo/TabBar.ios.js');
var MyWebView = require('./demo/WebView.ios.js');

var {
  StyleSheet,
  View,
  Text,
  AppRegistry,
  NavigatorIOS,
  ListView,
  TouchableHighlight,
} = React;

var pages = {
	'View' : MyView,
	'Text' : MyText,
	'Image' : MyImage,
	'NativeProps' : MyDM,
	'Loader' : MyLoader,
	'Date' : MyDatePicker,
	'Map' : MyMapView,
	'Picker' : ＭyPicker,
	'Picker2' : ＭyPicker2,
	'Progress' : MyProgress,
	'ScrollView' : MyScroll,
	'SegmentedControl': MySegmentedControl,
	'Slider': MySlider,
	'Switch': MySwitch,
	'TabBar': MyTabBarIOS,
	'WebView': MyWebView,
};

var _arr = [];
for(var a in pages){
	_arr.push(a);
}

var MyListView = React.createClass({
	getInitialState: function(){
        var _dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        
		return {
			dataSource: _dataSource.cloneWithRows(_arr)
		}
	},

	componentDidMount: function() {
        var _dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.setState({
			dataSource: _dataSource.cloneWithRows(_arr)
		});
	},

	handlePress: function(rowData, sectionID, rowID){
		console.log(rowData, sectionID, rowID);
		if(this.props && this.props.onPress){
 			this.props.onPress(rowData);
		}
	},
	_renderRow: function(rowData: string, sectionID: number, rowID: number){
		return (
			<View >
				<TouchableHighlight 
					onPress={()=>this.handlePress(rowData, sectionID, rowID)} 
					underlayColor='#f3f3f3'>
					<View style={Styles.btn}>
						<Text>{rowData}</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	},
	render: function(){
		return (
			<ListView 
				dataSource={this.state.dataSource} 
				renderRow={this._renderRow}
			/>
		);
	}
});

var MyNav = React.createClass({
	_onRightButtonPress: function(){
		this.refs.nav.push({
			title: 'From Right',
			component: MyView,
		});
	},

	_onPress: function(key){
		this.refs.nav.push({
			title: key,
			component: pages[key],
		});
	},

	render : function(){
		// `style` 很关键，没有它，则没视图
		return (
			<NavigatorIOS 
				ref="nav" 
				style={Styles.container}
				initialRoute={{
					component: MyListView,
					title: 'Demos',
					passProps: {
						onPress: this._onPress,	
					},
					rightButtonTitle: 'more',
					onRightButtonPress: this._onRightButtonPress,
				}} 
			/>
		);
	}
});

AppRegistry.registerComponent('NavigatorExample', () => MyNav);