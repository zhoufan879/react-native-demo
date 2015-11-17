'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	MapView,
	ScrollView,
	TouchableHighlight,
} = React;

/*
* 1. Location
* 2. Map
*
* 经、纬度参考：
* > https://www.google.com/maps
* > http://www.gpsspg.com/maps.htm
*
*/
var MyMapView = React.createClass({
	getInitialState() {
		return {
			mapRegion: undefined,
			annotations: undefined,
			isFT: true,
		}
	},

	_handleRegionChange(region) {
		console.log(region);
	},

	_handleRegionChangeOn(l1, l2, city) {
		this.setState({
			annotations: [{
				longitude: l1,
				latitude: l2,
				title: 'welcome to ' + city
			}],
		});
	},

	_handleFirstTime(region) {
		if(this.state.isFT){
			this.setState({
				mapRegion: region,
				annotations: [{
					longitude: region.longitude,
					latitude: region.latitude,
					title: 'you are here'
				}],
				isFT: false,
			});
		}
	},

	render() {
		return (

		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="Location">
						
						<MapView style={Styles.map} showsUserLocation={true} />

					</MyPanel>

					<MyPanel title="Map">
						
						<MapView 
							style={Styles.map} 
							region={this.state.mapRegion || undefined} 

							// 注解，tip
							annotations={this.state.annotations || undefined}

							onRegionChange={this._handleRegionChange}

          					onRegionChangeComplete={this._handleFirstTime}
						/>

						<View style={{flexDirection:'row', marginTop: 10}}>
							<TouchableHighlight onPress={this._handleRegionChangeOn.bind(this, 116.23, 39.54, 'beijing')}>
						      	<Text>北京&nbsp;&nbsp;</Text>
						    </TouchableHighlight>

							<TouchableHighlight onPress={this._handleRegionChangeOn.bind(this, 121.48, 31.22, 'shanghai')}>
						      	<Text>上海&nbsp;&nbsp;</Text>
						    </TouchableHighlight>

							<TouchableHighlight onPress={this._handleRegionChangeOn.bind(this, 114.06, 22.54, 'shenzhen')}>
						      	<Text>深圳</Text>
						    </TouchableHighlight>
						</View>

					</MyPanel>
				</View>
			</ScrollView>
		)
	}
});

module.exports = MyMapView;
