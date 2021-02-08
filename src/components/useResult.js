import React,{useState,useEffect} from 'react';
import url from "../constant/url"

export default ()=>{
    const [result,setResult]= useState([])
  const [error, setError] = useState()
  const[loading,isLoading]=useState()
  const onSearch= async(searchTerm)=>{
    isLoading(true)
    try{
    const res = await url.get("/search", {
      params : {
          limit: 50,
          term:searchTerm,
          location : "san jose"
      }
  });
  // console.log(res.data)
  
  setResult(res.data.businesses)
  isLoading(false)
  }catch(e){
  setError("Something went wrong")
  }
  }
  useEffect(()=>{
  onSearch('dosa')
  },[])
  return [result,error,onSearch,loading]
}