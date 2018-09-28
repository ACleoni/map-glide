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
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={style} onPress={this.props.onPress}>
                    <Text styles={styles.text}>
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
};

BtnController.defaultProps = {
    width: 297.74,
    height: 45.76
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    },
    container: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 47,
        paddingRight: 47,
        backgroundColor: '#80CC28',
        borderRadius: 5,
        alignItems: 'stretch',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 1
        }
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 3
    }
});

export default BtnController;