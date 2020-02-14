import React,{Component} from 'react'

import {View,Text,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get("window")



export const Intouch=({navigation})=>{

        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'black',color:'white',borderWidth:1,borderColor:'white',width:width,height:height}}>
          
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>
Get in touch
          </Text>

          <Text style={{margin:20,color:'white',fontSize:20}}>
Name         
 </Text>

<TextInput style={{color:'white',width:width*0.3,height:40,borderWidth:2,borderColor:'white'}}/>


<Text style={{margin:20,color:'white',fontSize:20}}>
Email
 </Text>

<TextInput style={{color:'white',width:width*0.3,height:40,borderWidth:2,borderColor:'white'}}/>


<Text style={{margin:20,color:'white',fontSize:20}}>
Message
 </Text>

<TextInput multiline={true} style={{color:'white',width:width*0.3,height:70,borderWidth:2,borderColor:'white'}}/>


            </View>
        )
}