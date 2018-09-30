import React from 'react';
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements';

export const SearchBarController = ({ onChangeText, onClearText, placeholder, onSubmitEditing }) => {
    return (
        <View>
            <SearchBar
                onChangeText={onChangeText}
                onClearText={onClearText}
                placeholder={placeholder}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    )
};