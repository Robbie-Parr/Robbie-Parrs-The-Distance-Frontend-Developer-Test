import React,{useState,useMemo} from 'react';
import {Text, View,Button,Linking,Image,TouchableOpacity,Modal } from 'react-native';
import { WebView } from 'react-native-webview';

import DateComponent from "./DateComponent";
import SingleEvent from "./SingleEvent";

const EventCard = ({data}) => {
    const [selected,setSelected] = useState(false)

    return(
        <TouchableOpacity  style={{flex: 1,
            backgroundColor: "rgba(52,52,52,.57)",
            flexDirection:"column",
            borderRadius:5,
            padding:"1%",
            marginTop:"5%",
            height:160}} onPress={() => setSelected(!selected)}>
            <Image style={{width:"100%",height:100}} source={{uri:data.logo.url}}/>
            <View style={{flexDirection:"row",marginTop:5,padding:"1%"}}>
                <View style={{backgroundColor:"white", padding:"1%",flex:.9,
                              borderBottomLeftRadius:10,borderTopRightRadius:10,
                              alignSelf:'center', paddingLeft:"10%"}}>
                    <Text style={{fontSize:20}}>{data.name.text}</Text>
                </View>
                <DateComponent date={{start:data.start ,end:data.end}}/>
            </View>

            <SingleEvent data={data} selected={selected} setSelected={setSelected}/>
            
        </TouchableOpacity >
    )
}

export default EventCard;