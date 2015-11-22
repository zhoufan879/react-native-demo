'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	Image,
	ScrollView,
} = React;

/*
* 滚动条（横向、纵向）
*
*/
var arrs = [1,2,3,4,5,6,7,8,9,10];

var MyScroll = React.createClass({

	render() {
		return (

	        <View style={Styles.content}>
				<MyPanel title="横向">
				    <ScrollView horizontal={true} automaticallyAdjustContentInsets={false} scrollEventThrottle={200}>
				    	<View style={{flexDirection:'row', height: 100, backgroundColor: 'pink'}}>
				    		{
				    			arrs.map((a,i)=> 
				    				(
							    	<View style={{marginTop: 10, marginLeft: 10, height:80, width:70, backgroundColor: '#ddd'}}>
							    		<Text>{i}</Text>
							    	</View>
				    				)
				    			)
				    		}
				    	</View>

					</ScrollView>

				</MyPanel>

				<View style={Styles.panel}>
					<View style={Styles.panelHeader}>
						<Text>纵向</Text>
					</View>
					<View style={[Styles.panelBody, {height:180}]}>
						<ScrollView automaticallyAdjustContentInsets={false} scrollEventThrottle={200}>
					    	<View style={{backgroundColor: 'pink'}}>
					    		{
					    			arrs.map((a,i)=> 
					    				(
								    	<View style={{marginTop: 10, marginLeft: 10, height:80, width:70, backgroundColor: '#ddd'}}>
								    		<Text>{i}</Text>
								    	</View>
					    				)
					    			)
					    		}
					    	</View>

						</ScrollView>
					</View>
				</View>
			</View>
		)
	}
});

module.exports = MyScroll;
