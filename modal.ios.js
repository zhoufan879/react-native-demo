/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Modal,
} = React;

var Button = React.createClass({
  getInitialState() {
    return {
      name: 'zhoufan',
      content: '123456',
      modalVisible: false,
      modalAnimate: false,
    }
  },

  componentWillMount(){
    console.log(global.version);
  },

  _onClick(){
    this.setState({modalVisible: !this.state.modalVisible});
  },

  render() {
    var _value = this.props.children;
    if(!this.props.disabled){
      this.state.content = this.props.bubble();
      _value = this.props.value||_value;
    }
    return (
      <View >      
        <TouchableHighlight style={styles.btn} onPress={this._onClick}>
          <Text style={styles.btnText}>{_value}</Text>
        </TouchableHighlight>

        <Modal 
          animated={this.state.modalAnimate} 
          visible={this.state.modalVisible} >
          <View style={styles.container}>
            <Text style={styles.welcome}>{this.state.content}</Text>
            <TouchableHighlight style={styles.btn} onPress={this._onClick}>
              <Text style={styles.btnText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    )
  }
});

var Helloworld = React.createClass({
  getInitialState: function() {
    return {
      name: 'zhoufan',
    }
  },

  componentWillMount(){
    global.version = '1.0';
  },

  _onClick: function(_content){
    // AlertIOS.alert('好困〜', '这面试题逆天a', 
    //   [
    //     {text: '坚持一哈', onPress: () => console.log('ok')},
    //     {text: '向左看', onPress: () => console.log('cancel')},
    //   ]);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to @{this.state.name}'s React Native!
        </Text>

        <Button bubble={()=><Text>Hi!</Text>} > todoModal  </Button>

        <TouchableHighlight style={styles.btn} onPress={this._onClick}>
          <Text style={styles.btnText}> React-native in Native </Text>
        </TouchableHighlight>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },                  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  btn: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    margin: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('PropertyFinder', () => Helloworld);
