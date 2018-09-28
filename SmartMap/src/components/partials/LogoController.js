import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';

const window = Dimensions.get('window');

const Service = require('../../services');
const { getStyleFromProps } = Service;

class LogoController extends Component {
    render() {
        const containerStyle = [styles.logoContainer, getStyleFromProps(['marginTop'], this.props)];
        const imageStyle = [styles.image, getStyleFromProps(['width', 'height'], this.props)];
        return <View style={containerStyle}>
                    <Image source={require('../../images/logo.png')} style={imageStyle} />
                </View>
    }
};

const styles = StyleSheet.create({
    logoContainer: {
        width: window.width,
        alignItems: 'center',
        marginTop: 66
    },
    image: {
        width: 194.98,
        height: 48.23
    }
});

export default LogoController