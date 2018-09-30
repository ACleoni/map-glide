import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';


class MapController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {

            },
            markers: []
        }
    }
}

export default MapController