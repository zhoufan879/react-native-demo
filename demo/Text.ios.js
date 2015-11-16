'use strict'

var React = require('react-native');
var Styles = require('../styles/index.js');
var MyPanel = require('./Panel.ios.js');

var {
	View,
	Text,
	ScrollView,
} = React;

/*
* 1. h1~h6 (font-size) 
* 2. color
* 3. weight
* 4. underline/line-through/italic
* 5. text-align
* 6. flex
* 7. onPress
* 8. numberOfLines
*/
var MyText = React.createClass({
	render() {
		return (
		    <ScrollView
		        automaticallyAdjustContentInsets={false}
		        onScroll={() => { console.log('onScroll!'); }}
		        scrollEventThrottle={200}>

		        <View style={Styles.content}>

					<MyPanel title="H1-H6 styles">
						<Text style={Styles.h1}>H1 - hello world.</Text>
						<Text style={Styles.h2}>H2 - hello world.</Text>
						<Text style={Styles.h3}>H3 - hello world.</Text>
						<Text style={Styles.h4}>H4 - hello world.</Text>
						<Text style={Styles.h5}>H5 - hello world.</Text>
						<Text style={Styles.h6}>H6 - hello world.</Text>
					</MyPanel>

					<MyPanel title="Color font/background">
						<Text>“书山有路勤为径，
							<Text style={{paddingLeft:2, paddingRight:2, color:'#c7254e', backgroundColor: '#f9f2f4'}}>
								&nbsp;学海无涯&nbsp;
							</Text>苦作舟“
						</Text>
						<Text>
							”<Text style={{fontWeight:'bold'}}>业精于勤</Text>
							，荒于嬉，成行于思，毁于随”
						</Text>
					</MyPanel>

					<MyPanel title="Font weight(100~900)">
						<Text style={{fontWeight:'100'}}>不管</Text>
						<Text style={{fontWeight:'200'}}>{'\n'}你是20岁</Text>
						<Text style={{fontWeight:'300'}}>{'\n'}还是80岁</Text>
						<Text style={{fontWeight:'400'}}>{'\n'}只要停止学习</Text>
						<Text style={{fontWeight:'500'}}>{'\n'}就说明你老了</Text>
						<Text style={{fontWeight:'600'}}>{'\n'}坚持学习的人</Text>
						<Text style={{fontWeight:'700'}}>{'\n'}会永远年轻</Text>
						<Text style={{fontWeight:'800'}}>{'\n'}人生最快乐的事</Text>
						<Text style={{fontWeight:'900'}}>{'\n'}莫过于保持头脑青春永驻</Text>
					</MyPanel>

					<MyPanel title="Underline/line-through/italic">
						<Text style={Styles.underline}>
							生命不息，code不止
						</Text>
						<Text style={Styles.lineThrough}>
							生命不息，code不止
						</Text>
						<Text style={Styles.italic}>
							生命不息，code不止
						</Text>
					</MyPanel>

					<MyPanel title="Text align">
						<Text style={{textAlign: 'left'}}>
							得道者多助，失道者寡助
						</Text>
						<Text style={{textAlign: 'center'}}>
							十年树木，百年树人
						</Text>
						<Text style={{textAlign: 'right'}}>
							士不可不弘毅，任重而道远
						</Text>
						<Text style={{textAlign: 'justify'}}>
							试玉要烧三日满，辨材须待七年期
						</Text>
					</MyPanel>

					<MyPanel title="Flexbox">
						<View style={{marginBottom:10, height: 50,width:50,borderWidth:1, borderColor:'blue',alignItems: 'center', justifyContent: 'center'}}>
							<Text>*</Text>
						</View>
						<View style={{marginBottom:10, height: 50,width:50,borderWidth:1, borderColor:'yellow',alignItems: 'flex-end', justifyContent: 'flex-end'}}>
							<Text>*</Text>
						</View>
						<View style={{height: 50,width:50,borderWidth:1, borderColor:'red',alignItems: 'flex-end', justifyContent: 'space-between'}}>
							<Text>*</Text>
							<Text>*</Text>
						</View>
					</MyPanel>

					<MyPanel title="Press event">
						<Text onPress={()=>console.log(this.refs.txt1.props.children)}>
							Click me
						</Text>
						<Text ref='txt1'>君子忧道不忧贫</Text>	
					</MyPanel>

					<MyPanel title="numberOfLines">
						<Text numberOfLines={1}>人之初  性本善  性相近  习相远  苟不教  性乃迁 教之道  贵以专  昔孟母  择邻处  子不学  断机杼 窦燕山  有义方  教五子  名俱扬  养不教  父之过 教不严  师之惰  子不学  非所宜  幼不学  老何为</Text>	
						<Text numberOfLines={2} style={{marginTop:10}}>人之初  性本善  性相近  习相远  苟不教  性乃迁 教之道  贵以专  昔孟母  择邻处  子不学  断机杼 窦燕山  有义方  教五子  名俱扬  养不教  父之过 教不严  师之惰  子不学  非所宜  幼不学  老何为</Text>	
						<Text numberOfLines={4} style={{marginTop:10}}>人之初  性本善  性相近  习相远  苟不教  性乃迁 教之道  贵以专  昔孟母  择邻处  子不学  断机杼 窦燕山  有义方  教五子  名俱扬  养不教  父之过 教不严  师之惰  子不学  非所宜  幼不学  老何为</Text>	
					</MyPanel>
				</View>
			</ScrollView>
		)
	}
});

module.exports = MyText;
