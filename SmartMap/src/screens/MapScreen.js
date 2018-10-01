import React, { Component } from 'react';
import { StatusBar, NetInfo, Alert } from 'react-native'
import { UIController, SearchBarController, MapController } from '../components/partials';

class MapScreen extends Component {
    static navigationOptions = {
        title: 'SmartMap',
        headerStyle: {
            backgroundColor: '#393e42',
            shadowColor: 'transparent',
            borderWidth: 0,
        },
        headerTitleStyle: { 
            color: '#fff',
            fontFamily: 'Iowan Old Style',
            fontSize: 28,
        },
        leftStyle:{
            color: '#fff'
        }
    };

    async _handleChangeText() {
        
    }

    async _handleSubmitEditing() {
        try {
            const connectionType = await NetInfo.getConnectionInfo().then((connectionInfo) => {
                // User not connected to any network
                if (connectionInfo.type === 'none' || connectionInfo.type === 'unknown') {
                    Alert.alert('Error: SmartMap requires a cellular or wifi connection.')
                }
                // User is connected to either wifi or cellular data and a query can be made
                if (connectionInfo.type === 'cellular' || connectionInfo.type === 'wifi') {
                    this._handleSubmitQuery()
                }
                return connectionType
            })
        } catch (error) {
            Alert.alert(error)
        };
    };

    render() {
        return (
            <UIController>
                <StatusBar barStyle={'light-content'} />
                <SearchBarController
                    placeholder={'Search'}
                    onChangeText={this._handleChangeText}
                    onSubmitEditing={this._handleSubmitEditing}
                />
                <MapController />
            </UIController>
        )
    };
};

export default MapScreen;