import React, {useState} from 'react';
import { auth  } from "../../firebase/config";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity

} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { sendPasswordResetEmail} from "firebase/auth";
import styles from './style'


function Forgot({navigation}) {
  const [email, setEmail] = useState('');



  const forgotPassword = (email) => {
    console.log("reset email sent to " + email);
    sendPasswordResetEmail(auth,email.trim())
        .then(() => {
          
          alert("Reset  email sent to "+email)
        })
        .catch(function (e) {
    console.log(e)
        });
  };
  const onFooterLinkPress = () => {
    navigation.navigate('Login')
}


return(
<View style={styles.container}>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
   
     
        <TextInput
            style={styles.input}
            placeholder='E-mail'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
   
    
        <TouchableOpacity
            style={styles.button}
            onPress={() => forgotPassword(email)}>
            <Text style={styles.buttonTitle}>Reset password</Text>
        </TouchableOpacity>


        <Text style={styles.footerText}>
         <Text onPress={onFooterLinkPress} style={styles.footerLink}>Login</Text></Text>
    </KeyboardAwareScrollView>
</View>
)


}

export default Forgot;
