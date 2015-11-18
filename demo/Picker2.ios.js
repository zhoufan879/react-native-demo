'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');
var Cities = require('./Cities.json2.js');

var {
	View,
	Text,
	Image,
	ScrollView,
	PickerIOS,
	PickerItemIOS,
} = React;

/*
* 城市 三级联动 
*
*/
var provinces = [];
Cities.map((p) => provinces.push(p.name));

var ＭyPicker = React.createClass({
	getInitialState(){
		return {
			province: '上海',
			city: '',
			district: '',

			cities: [],
			districts: [],
		}
	},

	componentDidMount(){
		this._handleSelectProvince(this.state.province);
	},

	_handleSelectProvince(name) {
		var _cities = [];
		for(var _p in Cities){
			if(Cities[_p]['name']==name){
				_cities = Cities[_p]['city'];
				break;
			}
		}

		this.setState({
			province: name,
			cities: _cities,
			districts: _cities[0]['area'],
			city: _cities[0]['name'],
			district: _cities[0]['area'][0],
		});
	},

	_handleSelectCity(name){
		var _districts = [];
		var _cities = this.state.cities;
		for(var _c in _cities){
			if(_cities[_c]['name']==name){
				_districts = _cities[_c]['area'];
				break;
			}
		}

		this.setState({
			city: name,
			districts: _districts,
			district: _districts[0],
		});
	},

	render() {
		console.log(this.state.province, this.state.city, this.state.district);

		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="Choose area (三级)">
						<View style={{flexDirection:'row'}}>
							<PickerIOS 
								style={{flex:1}} 
								selectedValue={this.state.province} 
								onValueChange={this._handleSelectProvince}
								>
								{
									provinces.map((p)=> 
										(<PickerItemIOS 
											key={p}
											value={p} 
											label={p} 
										/>)
									)
								}
							</PickerIOS>

							<PickerIOS 
								style={{flex:1}} 
								selectedValue={this.state.city} 
								onValueChange={this._handleSelectCity}
								>
								{
									this.state.cities.map((c)=> 
										(<PickerItemIOS 
											key={c['name']}
											value={c['name']} 
											label={c['name']}
										/>)
									)
								}
							</PickerIOS>

							<PickerIOS 
								style={{flex:1}} 
								selectedValue={this.state.district} 
								onValueChange={(d)=>this.setState({district:d})}
								>
								{
									this.state.districts.map((d)=> 
										(<PickerItemIOS 
											key={d}
											value={d} 
											label={d}
										/>)
									)
								}
							</PickerIOS>

						</View>
						<View>
							<Text>Selected: {this.state.province + ',' + this.state.city + ',' + this.state.district}</Text>
						</View>
					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = ＭyPicker;
