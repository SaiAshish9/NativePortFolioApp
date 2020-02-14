import React from 'react'

import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity, FlatList} from 'react-native'


import {Dimensions} from 'react-native'

import {faArrowRight,faBars,faTimes} from '@fortawesome/free-solid-svg-icons'



import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'



console.disableYellowBox=true

const {width,height}=Dimensions.get("window")


export default class Home extends React.Component{

    state={
        current:'home'
    }
    render(){
        return(

            <View>
            
   
                    
                    <View style={{width:width/2,height:height,color:'white'}}>
                    
                    
                      <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:height*0.5,marginLeft:width*0.1}}>
                    I'm a Designer
                      </Text>
                      <Text style={{marginTop:10,fontSize:12,marginLeft:width*0.1,color:'white'}}>
                    
                    I'm a Designer with extensive experience for over 3 years
                    
                      </Text>
                    <Text style={{marginTop:30,marginLeft:width*0.1,color:'white',fontWeight:'bold'}}> 
                    Get in my world
                    </Text>
                    
               
                    
                    
                    
                    </View>
                    
                    <View style={{position:'absolute',right:20,top:width*0.27, height:height*0.4,width:width*0.4,borderColor:'white',borderWidth:0.6}}>
                    
                    <Image source={require('./image.jpg')} style={{position:'relative',right:0,top:0,left:0,bottom:0,width:width*0.395,height:height*0.35}}/>
                    </View>

              

            </View>
        )
    }
}