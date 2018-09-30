import React, { Component } from 'react';
import { UIController, SearchBarController } from '../components/partials';

class MapScreen extends Component {
    render() {
        return (
            <UIController>
                <SearchBarController />
                {/* <MapController /> */}
            </UIController>
        )
    };
};

export default MapScreen;