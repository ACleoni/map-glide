import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';

const Service = require('../../services');
const {
    getStyleFromProps,
    getPlatformValue
} = Service

const {width, height} = Dimensions.get('window');


class UIController extends Component {
    _renderChildren() {
        let childrenArray = [];
        childrenArray.push(this.props.children);
        return childrenArray
    };

    _renderViewBackground() {
        const style = [ styles.containerView, 
                        getStyleFromProps(['paddingTop', 'justifyContent'], this.props)
                    ];
        return <View style={style}>
                    {this._renderChildren()}
                </View>
    };

    render() {
        return ( 
            this._renderViewBackground() 
        )
    }
};

const styles = StyleSheet.create({
    containerView: {
        width: width,
        height: height,
        paddingTop: getPlatformValue('android', 5, 0)
    }
});


export default UIController;