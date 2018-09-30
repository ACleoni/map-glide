import React, { Component } from 'react';
import Animation from 'lottie-react-native';
import {
    View,
    StyleSheet
} from 'react-native'


class AnimController extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Animation
                        ref={animation => { this.animation = animation; }}
                        style={this.props.style}
                        loop={this.props.loop}
                        source={this.props.source}
                    />
                </View>
            </View>
        );
    };

    componentDidMount() {
        this.animation.play();
    };
    
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default AnimController;