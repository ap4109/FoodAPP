import React,{useEffect} from 'react';
import { Text, View,StyleSheet,FlatList,Image,TouchableOpacity } from 'react-native';
import RenderResult from './RenderResult'
import {withNavigation} from '@react-navigation/compat'
const List=({title,result,navigation}) => {
    if(!result.length){
        return null
    }

  return(
      <View>
          <Text style={styles.title}>{title}</Text>
      
        <FlatList
        horizontal
        data={result}
        keyExtractor={(res)=>res.id}
        renderItem={({item})=>{
         return(
             <TouchableOpacity onPress={()=>navigation.navigate("ResultShow",{id:item.id})}>
                 <RenderResult resp={item}/>
             </TouchableOpacity>
         )
          
        }}
        />
      </View>
  )
}
const styles= StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        margin:10
    }

})

export default withNavigation(List);
