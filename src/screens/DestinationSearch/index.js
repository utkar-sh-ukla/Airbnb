import { View, Text, FlatList, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo'

import searchResult from '../../../assets/data/search.js'

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState( '' )

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input Component */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />

            {/* List of Destination */}
            <FlatList
                data={searchResult}
                renderItem={( { item } ) => (
                    <Pressable onPress={() => navigation.navigate( 'Guests' )} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )} />
        </View >
    )
}

export default DestinationSearchScreen