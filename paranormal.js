import React,{Component} from 'react'

import {View,Text,Image,Dimensions} from 'react-native'

const {width,height}=Dimensions.get("window")

import Pic1 from './blog1.jpg'
import Pic2 from './blog2.jpg'
import Pic3 from './blog3.jpg'
import Pic4 from './blog4.jpg'
import Pic5 from './blog5.jpg'

export const Paranormal=()=>{

        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'black',color:'white',borderWidth:1,borderColor:'white',width:width,height:height}}>
          
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>
            Paranormal Blog
          </Text>

<Image source={Pic1} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic2} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic3} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic4} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic5} resizeMode="contain" style={{width:100,height:100}}/>



            </View>
        )
}