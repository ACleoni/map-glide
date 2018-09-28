import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Stylesheet
} from 'react-native';

const Service = require('../../services');
const { getStyleFromProps } = Service



class BtnController extends Component {
    render() {
        const style = {
            ...styles.container,
            ...getStyleFromProps(['marginTop', 'width', 'flex'], this.props)
        };
    }
};

export default BtnController