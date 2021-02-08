import React,{useState} from 'react';
import { View, Text,ActivityIndicator,ScrollView } from 'react-native';
import List from "../../components/List"
import SearchBar from '../../components/SearchBar'
import useResult from "../../components/useResult"
const SearchScreen =()=>{
  const [term,setTerm] = useState("")
  const[result,error,onSearch,loading] =useResult()
  const filterByPrice = (price) => {
    return result.filter(res => {
     return res.price === price;
    })
  }

  return(
   <>
      <SearchBar 
      term={term} 
      onTermChange={setTerm}
      onTermSubmit={()=>onSearch(term)}
      />
    
      {loading?<ActivityIndicator size="large" color="black"/>:
      <ScrollView>
      {error?<Text>{error}</Text>:null}
      {result.length!==0?<Text>we have found {result.length} result</Text>:null}
      <List  title="Cost Effective" result={filterByPrice('$')}/>
      <List title="Big Pricier" result={filterByPrice('$$')}/>
      <List title="Big Spender" result={filterByPrice('$$$')}/>
      </ScrollView>

     
  } 
    </>
  )
}
export default SearchScreen
