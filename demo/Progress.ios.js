'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	Image,
	ScrollView,
	ProgressViewIOS,
	TouchableHighlight,
} = React;

/*
* 进度条
*
*/
var timer = undefined;
var MyProgress = React.createClass({
	getInitialState(){
		return {
			_progress: 0
		}
	},

	_handleRun(){
		timer = setInterval(function(){

			if(this.state._progress>=1){
				clearInterval(timer);
				return;
			}

			this.setState({
				_progress: this.state._progress + 0.001
			});
		}.bind(this), 10);
	},

	componentWillUnmount(){
		if(timer) clearInterval(timer);
	},

	render() {
		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="Progress demo">

						<ProgressViewIOS
							progress={this.state._progress}
						/>
						<ProgressViewIOS
							style={{marginTop: 20}}
							progressTintColor="red"
							progressViewStyle="bar"
							progress={this.state._progress}
						/>
						<ProgressViewIOS
							style={{marginTop: 20}}
							progressTintColor="orange"
							trackTintColor="black"
							progress={this.state._progress}
						/>
						<ProgressViewIOS
							style={{marginTop: 20}}
							progressTintColor="pink"
							progress={this.state._progress}
						/>
						<ProgressViewIOS
							style={{marginTop: 20}}
							progressTintColor="yellow"
							progress={this.state._progress}
						/>

						<View style={{marginTop: 10}}>
							<TouchableHighlight onPress={this._handleRun}>
						      	<Text> Run </Text>
						    </TouchableHighlight>
						</View>

					</MyPanel>

				</View>
			</ScrollView>
		)
	}
});

module.exports = MyProgress;
