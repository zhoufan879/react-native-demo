'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');
var Cities = require('./Cities.json.js');

var {
	View,
	Text,
	Image,
	ScrollView,
	PickerIOS,
	PickerItemIOS,
} = React;

/*
* 城市 二级联动 
*
*/
// Citys["城市代码"].map((p)=> console.log(p["省"]) );
var provinces = Cities["城市代码"];		

var ＭyPicker = React.createClass({
	getInitialState(){
		return {
			selected: '',

			province: '上海',
			city: '',
			district: '',
		}
	},

	_handleSelectProvince(name) {

	},

	render() {
		console.log(this.state.selected);
		console.log(this.state.province);
		var cities = [];
		for(var _p in provinces){
			if(provinces[_p]["省"]==this.state.province){
				cities = provinces[_p]["市"];
				break;
			}
		}
		console.log(cities);

		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="Choose person">
						<PickerIOS 
							selectedValue={this.state.selected}
							onValueChange={(v)=>this.setState({selected:v})}>
							<PickerItemIOS 
									key="1001"
									value="1001" 
									label="zhoufan879"
								/>
							<PickerItemIOS 
								key="1002"
								value="1002" 
								label="glinda"
							/>
						</PickerIOS>
					</MyPanel>

					<MyPanel title="Choose citys">
						<View style={{flexDirection:'row'}}>
							<PickerIOS 
								style={{flex:1}} 
								selectedValue={this.state.province} 
								onValueChange={(v)=>this.setState({province: v})}
								>
								{
									provinces.map((p)=> 
										(<PickerItemIOS 
											key={p["省"]}
											value={p["省"]} 
											label={p["省"]}
										/>)
									)
								}
							</PickerIOS>

							<PickerIOS 
								style={{flex:1}} 
								selectedValue={this.state.city} 
								onValueChange={(c)=>this.setState({city: c})}
								>
								{
									cities.map((c)=> 
										(<PickerItemIOS 
											key={c["编码"]}
											value={c["编码"]} 
											label={c["市名"]}
										/>)
									)
								}
							</PickerIOS>

						</View>
					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = ＭyPicker;
