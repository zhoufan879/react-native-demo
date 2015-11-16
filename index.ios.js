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
  NavigatorIOS,
} = React;

var MyPage = React.createClass({
  getInitialState: function() {
    return {
      name: 'zhoufan',
    }
  },
  _onClick: function(_content){
  },
  render: function() {
    return (
        
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
