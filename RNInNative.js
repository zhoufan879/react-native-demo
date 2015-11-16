'use strict';

var React = require('react-native');

var {
    View,
    Text,
} = React;

var RnInNative = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>This is a simple React view embedded inside of a Native View</Text>
                <Text>This is a simple React view embedded inside of a Native View</Text>
                <Text>This is a simple React view embedded inside of a Native View</Text>
                <Text>This is a simple React view embedded inside of a Native View</Text>
                <Text>This is a simple React view embedded inside of a Native View</Text>
                <Text>This is a simple React view embedded inside of a Native View</Text>
            </View>
        );
    }
});

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }
});

module.exports = SimpleView;
