import React, { Component } from 'react';
import { UIController, LogoController, BtnController } from '../components/partials';

class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <UIController>
                <LogoController />
                <BtnController onPress={() => navigate('Map')}>
                    Get Started
                </BtnController>
            </UIController>
        );
    };
};

export default HomeScreen;