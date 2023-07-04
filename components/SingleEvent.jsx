import React,{useState,useMemo} from 'react';
import {Text, View,Button,Linking,Image,TouchableOpacity,Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import DateComponent from "./DateComponent";

const SingleEvent = ({data,selected,setSelected}) => {
    return(
        <Modal visible={selected}>
            <TouchableOpacity  style={{
                flex: 1,
                backgroundColor: "rgba(52,52,52,.57)",
                flexDirection:"column",
                borderRadius:5,
                padding:"1%",
                marginTop:"5%",
                height:160,marginBottom:-400 }
            } 
            onPress={() => setSelected(!selected)}>
                <Image style={{width:"100%",height:100}} source={{uri:data.logo.url}}/>
                <View style={{flexDirection:"row",marginTop:10,padding:"1%"}}>
                    <View style={{backgroundColor:"white", padding:"1%",flex:.8,
                        borderBottomLeftRadius:10,borderTopRightRadius:10,
                        alignSelf:'center', paddingLeft:"10%"}}
                    >
                        <Text style={{fontSize:20}}>{data.name.text}</Text>
                    
                    </View>
                
                    <DateComponent date={{start:data.start ,end:data.end}}/>
                
                </View>
            
            </TouchableOpacity >
        
            <WebView source={{html:data.description.html}} style={{ flex: 1, margin:"2%"}} />
            <Button onPress={() => Linking.openURL(data.url)} title="To Event Page"/>
        
        </Modal>
    )
}

export default SingleEvent;