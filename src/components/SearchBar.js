import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
const SearchBar = ({term, onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.container}>
            <Icon name="search-outline" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="words"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
               
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        height: 50,
        margin: 10,
        borderRadius: 5,
    },
    icon: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 18
    }

})
export default SearchBar