import React,{Component} from 'react'

import {View,Text,Image,Dimensions,TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get("window")



export const Contact=({navigation})=>{

        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'black',color:'white',borderWidth:1,borderColor:'white',width:width,height:height}}>
          
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>
         Contact Me
          </Text>


<TouchableOpacity

onPress={
    ()=>navigation.navigate('home')
}
>


<View style={{alignItems:'center',justifyContent:'center',width:width*0.3,height:height*0.08,margin:30,borderColor:'white',borderWidth:3}}>
<Text style={{color:'white',fontWeight:'bold'}}>
Back To Home
</Text>
</View>

</TouchableOpacity>



          <View style={{alignItems:'center',justifyContent:'center',width:width,display:'flex',flexDirection:'row'}}>
              
              <TouchableOpacity>
              <Text style={{margin:20,color:'white'}}>
                  Facebook
              </Text>
              </TouchableOpacity>
       
<TouchableOpacity>
<Text style={{margin:20,color:'white'}}>
                  Twitter
              </Text>
</TouchableOpacity>

              
<TouchableOpacity>
<Text style={{margin:20,color:'white'}}>
                  Instagram
              </Text>
    </TouchableOpacity> 


<TouchableOpacity>
<Text style={{margin:20,color:'white'}}>
                  LinkedIn
              </Text>
</TouchableOpacity>
              
           
          </View>

<View style={{width:width,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'white',marginTop:30}}>
Jay Alani 💖 2020. All rights reserved


</Text>

</View>



            </View>
        )
}