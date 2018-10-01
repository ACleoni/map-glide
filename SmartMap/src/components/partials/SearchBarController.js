import React from 'react';
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements';

export const SearchBarController = ({ onChangeText, onClearText, placeholder, onSubmitEditing }) => {
    return (
        <View style={{zIndex: 1}}>
            <SearchBar
                round={true}
                onChangeText={onChangeText}
                onClearText={onClearText}
                placeholder={placeholder}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    )
};