import React, {Component} from 'react';
import {UIController, LogoController} from '../components/partials';

class HomeScreen extends Component {
    render() {
        return (
            <UIController>
                <LogoController />
            </UIController>
        );
    }
}

export default HomeScreen;