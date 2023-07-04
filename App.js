import React,{useEffect,useState} from 'react';
import {Text, View,ScrollView } from 'react-native';
//import {REACT_APP_API_URL,REACT_APP_API_KEY} from "./env"

import EventCard from "./components/EventCard"

export default function App() {
  const [data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      //GraphQL link produced 401 even though key was provided in header,
      //Request format aborted
      
      /*const query = `
      query {
        events {
          name
          start
          end
          html
          url
        }
      }`
      const response = await fetch(REACT_APP_API_URL,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "x-api-key":REACT_APP_API_KEY,
              
          },
          body: JSON.stringify({query:query})
      })*/

      const response = await fetch("https://thedistance.co.uk/wp-content/uploads/2020/01/eventbrite.json",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        }
      })
      if(response.status !==404){
          const responsejson = await (response).json()
          setData(responsejson.events)
      }}
   fetchData();
  },[])

  return (
    <ScrollView style={{flex: 1,
      backgroundColor: "#FFFFFF",
      marginLeft:"2%",
      marginTop:"12%",
      marginRight:"2%",
      minWidth:"96%"}}>

      <Text style={{paddingLeft:"45%"}}>Events</Text>
      {data && data.map((data,i) =>
        <EventCard key={i} data={data}/>
      )}
    </ScrollView>
  );
}


