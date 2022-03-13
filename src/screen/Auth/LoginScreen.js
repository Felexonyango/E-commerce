

import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,Switch } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style'

import {AuthenticationContext} from "../../context/Auth/AuthContext"



export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPass, setshowpass] = useState(true);

    const {handleSignIn} =useContext(AuthenticationContext)

   const toggleSwitch=()=> {
       setshowpass(false)
      
      }

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }
   
  
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/download.jpeg')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    
                />
       
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={!showPass}
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCompleteType="password"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"

      
                   />
                     <Switch
                    onValueChange={toggleSwitch}
                    value={!showPass}
                    /> 
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSignIn(email,password)}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
