import React,{useState,useContext} from "react";
import {View,Text,TextInput,Switch,Image,TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {AuthenticationContext} from "../../context/Auth/AuthContext"
import styles from './style';

export default function RegisterScreen({navigation}){

    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setshowpass] = useState(true);

const {handleSignUp} =useContext(AuthenticationContext)

const onFooterLinkPress = () => {
    navigation.navigate('Login')
}
const toggleSwitch=()=> {
    setshowpass(false)
   
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
            placeholder=' Name'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setName(text)}
            value={Name}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
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
            onPress={() => handleSignUp(email,password)}>
            <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
            <Text style={styles.footerText}>Already got an account? 
            <Text onPress={onFooterLinkPress}
             style={styles.footerLink}>Log in
             </Text></Text>
        </View>
    </KeyboardAwareScrollView>
</View>

)




}