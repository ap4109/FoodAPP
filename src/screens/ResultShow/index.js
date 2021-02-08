import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,Image } from 'react-native';
import url from '../../constant/url'

const ResultShow=({route})=>{
  const [pic,setPic] = useState(null)
const {id} = route.params

const getResult=async(id)=>{
  const res = await url.get(`/${id}`)
  console.log(res.data)
  setPic(res.data)

}
useEffect(()=>{
getResult(id)
},[])
if(!pic){
  return null
}
  
  return(
    <View>
<FlatList
data={pic.photos}
keyExtractor={(photo)=>photo}
renderItem={({item})=>{
  return <Image source ={{uri:item}} style={{height:200,width:430}} />
}}
/>
    </View>
  )
}
export default ResultShow