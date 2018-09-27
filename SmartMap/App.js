import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animation from 'lottie-react-native';
import anim from './assets/map.json';
import UIController from './src/components/partials/BackgroundWrapper';

class App extends Component {
  componentDidMount() {
    this.animation.play();
  }
  
  render() {
    return (
      <UIController>
      <View style={styles.container}>
      <Image source={require('./images/logo.png')} style={{width: 220, height: 140}} />
      <Image source={require('./images/logo.png')} style={{width: 200, height: 120}} />
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          loop={true}
          source={anim}
        />
      </View>
      </UIController>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'space-around',
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
});

export default App
