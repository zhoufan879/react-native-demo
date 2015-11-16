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
* 盗用公司logo
* 
* 1. remote img
* 2. local img
* 3. tint color
* 4. border && radius
* 5. nesting
* 6. resize mode
* 7. gif
*/
var MyImage = React.createClass({
	render() {
		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="Remote Img">
						<Image
							source={{uri:'http://tp4.sinaimg.cn/5702767807/180/5741487764/0'}}
							style={{width: 30, height: 30}}
						/>
					</MyPanel>

					<MyPanel title="Local Img">
						<Image
							source={require('../image/jyfq.jpg')}
							style={{width: 30, height: 30}}
						/>
					</MyPanel>

					<MyPanel title="Tint color">
						<View style={{flexDirection:'row'}}>
							<Image
								source={reactLogo}
								style={{width: 30, height: 30, tintColor: 'blue'}}
							/>
							<Image
								source={reactLogo}
								style={{width: 30, height: 30, tintColor: 'red'}}
							/>
							<Image
								source={reactLogo}
								style={{width: 30, height: 30, tintColor: 'black'}}
							/>
							<Image
								source={reactLogo}
								style={{width: 30, height: 30, tintColor: 'green'}}
							/>
							<Image
								source={reactLogo}
								style={{width: 30, height: 30, tintColor: 'pink'}}
							/>
							<Image
								source={reactLogo}
								style={{width: 30, height: 30, tintColor: 'grey'}}
							/>
						</View>
					</MyPanel>

					<MyPanel title="Border && Radius">
						<View style={{flexDirection:'row'}}>
							<Image
								source={require('../image/jyfq.jpg')}
								style={{width: 30, height: 30, borderWidth: 1, borderColor: 'blue'}}
							/>
							<Image
								source={require('../image/jyfq.jpg')}
								style={{marginLeft: 10, width: 30, height: 30, borderWidth: 1, borderColor: 'blue', borderRadius: 3}}
							/>
							<Image
								source={require('../image/jyfq.jpg')}
								style={{marginLeft: 10, width: 30, height: 30, borderWidth: 1, borderColor: 'blue', borderRadius: 15}}
							/>
						</View>
					</MyPanel>

					<MyPanel title="Nesting">
						<Image
							source={require('../image/jyfq.jpg')}
							style={{width: 100, height: 100, }}
						>
							<Text style={{backgroundColor:'transparent', marginLeft:30,marginTop:40}}>We are family</Text>
						</Image>
					</MyPanel>

					<MyPanel title="Resize mode">
						<View style={{flexDirection:'row'}}>
							<View>
								<Image
									source={reactLogo}
									style={{width: 50, height: 80, borderWidth: 0.5,borderColor: 'black'}} 
									resizeMode={Image.resizeMode.contain} />
							</View>
							<View style={{marginLeft: 10,}}>
								<Image
									source={reactLogo}
									style={{width: 50, height: 80, borderWidth: 0.5,borderColor: 'black'}} 
									resizeMode={Image.resizeMode.cover} />
							</View>
							<View style={{marginLeft: 10,}}>
								<Image
									source={reactLogo}
									style={{width: 50, height: 80, borderWidth: 0.5,borderColor: 'black'}} 
									resizeMode={Image.resizeMode.stretch} />
							</View>
						</View>
					</MyPanel>

					<MyPanel title="Gif">
						<Image
							source={gxGif}
							style={{width: 100, height: 100, }} />
					</MyPanel>
				</View>
			</ScrollView>
		)
	}
});

var reactLogo = {uri: 'http://facebook.github.io/react/img/logo_small_2x.png'};
var gxGif = {uri: 'http://www.sznews.com/humor/attachement/gif/site3/20140415/4487fcd7fc6614b6bfab1b.gif'};

module.exports = MyImage;
