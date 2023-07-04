import React,{useMemo} from 'react';
import {Text, View } from 'react-native';


const DateComponent = ({date}) => {
    //start and end times seem to be identical in the dataset, will use start time
    //Year value is not displayed


    let formattedDate = new Date(date.start.utc)

    const format = (string,before) => {
        switch (string.length){
            case 1:
                if(before){
                    return "0"+string
                }else {
                    return string+"0"
                }
                break;
            case 2:
                return string
                break;
            default:
                return "00"
        }
    }

    const formatDay = (number) => {
        if([1,21,31].indexOf(number)!=-1){
            return number.toString()+"st"
        }else if([2,22].indexOf(number)!=-1){
            return number.toString()+"nd"
        }else if([3,23].indexOf(number)!=-1){
            return number.toString()+"rd"
        }else{
            return number.toString()+"th"
        }
    }

    const formatMonth = (number) => {
        return ["Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec"][number]
    }

    return(
        <View style={{flex: .2,
            backgroundColor: "#FFFFFF",
            flexDirection:"row",
            paddingLeft:"1%",
            borderTopLeftRadius:5,
            borderBottomRightRadius:5,
            marginLeft:"2%",
            minWidth:"8%"
            }}>
            <View style={{flexDirection:"row",padding:"1%",marginRight:10}}>
                <Text>{format(formattedDate.getHours().toString(),true)}</Text>
                <Text>:</Text>
                <Text>{format(formattedDate.getMinutes().toString(),false)}</Text>
            </View>
            <View style={{flexDirection:"column",marginRight:10}}>
                <Text>{formatDay(formattedDate.getDate())}</Text>
                <Text>{formatMonth(formattedDate.getMonth().toString())}</Text>
            </View>
            
        </View>
    )
}

export default DateComponent;