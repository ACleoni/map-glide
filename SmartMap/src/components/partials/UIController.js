import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Stylesheet,
} from 'react-native';

const Service = require('../../services');
const {
    getStyleFromProps,
    getPlatformValue
} = Service

const window = Dimensions.get('window');

class UIController extends Component {

    _renderChildren() {
        let childrenArray = [];
        childrenArray.push(this.props.children);
        return childrenArray
    };

    _renderViewBackground() {
        const style = [styles.containerView, getStyleFromProps(['paddingTop'], this.props)];
        return <View style={style}>
                    {this.renderChildren()}
                </View>
    };

    render() {
        return ( 
            this._renderViewBackground() 
        )
    }
};

const styles = Stylesheet.create({
    containerView: {
        flex: 1,
        paddingTop: getPlatformValue('android', 5, 22)
    }
});


export default UIController;