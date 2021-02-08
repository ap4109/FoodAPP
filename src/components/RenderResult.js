import React from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import useResult from "../components/useResult"
const RenderResult = ({ resp }) => {

    return (
        <View style={styles.container}>
          <Image
                style={{ height: 150, width: 300,borderRadius:5 }}
                source={{ uri: resp.image_url }}
            />
            <Text style={[styles.title, { fontSize: 16 }]}>{resp.name}</Text>
            <Text style={[styles.title, { fontSize: 13,color:'gray' }]}>{resp.rating} Stars<Text> {resp.review_count} Review</Text></Text>
        </View>

    )
}
const styles= StyleSheet.create({
    container:{
        marginLeft:10
    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    }

})
export default RenderResult