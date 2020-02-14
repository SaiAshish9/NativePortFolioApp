import React,{useState,createContext,useContext} from 'react'

import {View,Text,StyleSheet,Dimensions} from 'react-native'

import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'

import {NavigationContainer} from '@react-navigation/native'


import {Paranormal} from './paranormal'

import {Main} from './main'

import {SecondPage} from './secondpage'

import {Testimonial} from './testimonial'

import {Work} from './work'

import {Contact} from './contact'

import {Intouch} from './intouch'


const {width,height}=Dimensions.get("window")

const Drawer=createDrawerNavigator()




function CustomDrawerNavigator(props){

 

  return(
    <DrawerContentScrollView {...props} style={{backgroundColor:'black'}}>
      <DrawerItemList {...props}>
        <DrawerItem>
label="Close Drawer"
onPress={
  ()=>props.navigation.closeDrawer()
}
        </DrawerItem>


        <DrawerItem>
label="Toggle Drawer"
onPress={
  ()=>props.navigation.toggleDrawer()
}
        </DrawerItem>
      </DrawerItemList>
    </DrawerContentScrollView>
  )
}

export default class App extends React.Component {


  render(){
  return (
 <NavigationContainer >

<Drawer.Navigator 

drawerContentOptions={{
  activeTintColor:'blue',
  inactiveTintColor:'white',
activeBackgroundColor:'black',



}}

drawerStyle={{
backgroundColor:'black',
width:width*0.4,
color:'white',
borderColor:'white',
borderWidth:1
}}

drawerContent={
  props =>CustomDrawerNavigator(props)
} initialRouteName="home" >

  <Drawer.Screen
  name="home" component={Main}/>

<Drawer.Screen
  name="about" component={SecondPage}/>

<Drawer.Screen
  name="work" component={Work}/>

<Drawer.Screen
  name="testimonial" component={Testimonial}/>

<Drawer.Screen
  name="blogs" component={Paranormal}/>

<Drawer.Screen
  name="contact" component={Contact}/>

<Drawer.Screen
  name="intouch" component={Intouch}/>


</Drawer.Navigator>


 </NavigationContainer>



    )
}
}



const style=StyleSheet.create({})






