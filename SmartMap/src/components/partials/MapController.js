import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


class MapController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {

            },
            markers: []
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map}>
                
                </MapView>
            </View>
        )
    }

    componentDidMount() {
        
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

export default MapController