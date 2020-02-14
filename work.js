import React,{Component,useState,useEffect} from 'react'

import {View,Text} from 'react-native'




export class Work extends Component{
 

    state={
        x:1,
        y:1,
        z:1
    }
// useEffect(()=>{

//     setTimeout(()=>{
//         if(x<101)
//         Setx(x+1);
//        if(y<151)
//         Sety(y+1)
//         if(z<51)
//         Setz(z+1);
    
//     },0.00001)



// },[y])

componentDidMount(){
    this.interval=setInterval(()=>{
        if(this.state.x<101){
            this.setState(a=>({
                ...a,
                x:this.state.x+1
            }))
        }

        if(this.state.y<151){
            this.setState(a=>({
                ...a,
                y:this.state.y+1
            }))
        }

        if(this.state.z<51){
            this.setState(a=>({
                ...a,
                z:this.state.z+1
            }))
        }

                },0.001)

                if(this.state.y>151){
                    clearInterval(this.interval)
                }
}



render(){
    return (
<View style={{ flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',borderColor:'white',borderWidth:1}}>

<Text style={{fontSize:30,color:'white',fontWeight:'bold',marginTop:50,marginLeft:20}}>
    {this.state.x} M +
</Text>
<Text style={{color:'white',marginBottom:50}}>
    Locations Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
    {this.state.y} M +
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Cases Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
 {this.state.z} M +
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Publications
</Text>


</View>
)
}}