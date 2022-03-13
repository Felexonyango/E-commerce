import React,{useRef,useEffect} from 'react'
import {View,Text,Image,Animated,Dimensions} from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'


import Logo from "../../assets/download.jpeg"


const BGColor='#4D4A95'


export const SplashScreen = () => {
    const edges=useSafeAreaInsets()

const startAnimation =useRef( new Animated.Value(0)).current

const scaleLogo =useRef( new Animated.Value(1)).current
const scaleTitle =useRef( new Animated.Value(1)).current
const moveLogo =useRef( new Animated.ValueXY({x:0,y:0})).current
const moveTitle =useRef( new Animated.ValueXY({x:0,y:0})).current

useEffect(()=>{
setTimeout(() => {
    
    Animated.parallel([
Animated.timing(

    startAnimation,
    {
        toValue:-Dimensions.get('window').height,
        useNativeDriver:true
        
    }
),
Animated.timing(

    scaleLogo,
    {
        toValue:0.3,
        useNativeDriver:true
        
    }
),
Animated.timing(

    scaleTitle,
    {
        toValue:0.8,
        useNativeDriver:true
        
    }
),

Animated.timing(

    moveLogo,
    {
        toValue:{
            x:(Dimensions.get('window').width/2)-35,
            y:(Dimensions.get('window').height/2)-5
        },
        useNativeDriver:true
        
    }
),
Animated.timing(

    moveTitle,
    {
        toValue:{
            x:0,
            y:(Dimensions.get('window').height/2)-90
        },
        useNativeDriver:true
        
    }
)

    ])
    .start()
}, 500);

},[])
  return (
<View style={{
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
}}>
<Animated.View style={{
flex:1,
backgroundColor:BGColor,
zIndex:1,
transform:[{
    translateY:startAnimation
}]



 }}>
     <Animated.View style={{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         marginBottom:20,
       
     }}>
 <Animated.Image source={Logo} style={{
     width:100,
     height:100,
     transform:[
{translateX:moveLogo.x},

   {scale:scaleLogo},

        
     ]
 }}></Animated.Image>
 <Animated.Text style={{
     fontSize:25,
     fontWeight:'bold',
     color:'white',
     transform:[
     
     {    scale:scaleTitle}
     ]
 }}>SHOP</Animated.Text>
     </Animated.View>
     </Animated.View>
     <Animated.View style={{
             position:'absolute',
             top:0,
             bottom:0,
             left:0,
             right:0,
             backgroundColor:'rgba(0,0,0,0.04)',
             zIndex:0
     }}>

     </Animated.View>
</View>
  )
}
