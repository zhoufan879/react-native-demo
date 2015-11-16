'use strict'

var React = require('react-native');

var {
	StyleSheet,
} = React;

var Styles = StyleSheet.create({
	container: {
	    flex: 1,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
    btn: {
        padding: 10,
        paddingLeft: 10,
		borderBottomColor: '#eee', 
    	borderBottomWidth: 1,
    },
    content: {
    	marginTop: 70,
    	marginLeft: 10,
    	marginRight: 10,
    },
    underline: {
    	textDecorationLine: 'underline',
    },
    lineThrough: {
    	textDecorationLine: 'line-through',
    },
    italic: {
    	fontStyle: 'italic',
    },

    h1: {
    	fontSize: 36,
    	fontWeight: '500',
    	lineHeight: 40,
    },
    h2: {
    	fontSize: 30,
    	fontWeight: '500',
    	lineHeight: 40,
    },
    h3: {
    	fontSize: 24,
    	fontWeight: '500',
    	lineHeight: 34,
    },
    h4: {
    	fontSize: 18,
    	fontWeight: '500',
    	lineHeight: 28,
    },
    h5: {
    	fontSize: 12,
    	fontWeight: '500',
    	lineHeight: 22,
    },
    h6: {
    	fontSize: 8,
    	fontWeight: '500',
    	lineHeight: 16,
    },


    panel: {
    	marginBottom: 10,
    	borderColor: '#ddd',
    	borderWidth: 1,
    	borderRadius: 3,
    },
    panelHeader: {
    	padding: 10,
    	backgroundColor: '#f5f5f5',
    	borderBottomColor: '#ddd',
    	borderBottomWidth: 1,
    },
    panelBody: {
    	padding: 15,
    },

    textInput: {
	    height: 25,
	    borderWidth: 0.5,
	    borderColor: '#0f0f0f',
	    flex: 1,
	    fontSize: 13,
	    padding: 5,
    },
});

module.exports = Styles;
