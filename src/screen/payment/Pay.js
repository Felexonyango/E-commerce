
import React, { useState } from 'react'
import {View,Button} from "react-native"
import {Payment} from './Payment'
const Pay = () => {
  const[checkout, setCheckout]=useState(false)
  return (
   <View>
      {checkout ?(

 <Payment/>
      ):(

        <Button 
        title='Checkout'
         onPress={()=>{setCheckout(true)}
         
         
         }>
        
       </Button>
      )}
    
    </View>
  )
}

export default Pay
