import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { auth } from '../../firebase/config';
import {AuthenticationContext} from "../../context/Auth/AuthContext"
export function Account(){
const {user}=useContext(AuthenticationContext)

    
   
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
        {/* Hello, {auth.currentUser.displayName}  */}
        Hello {user.email}
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {

  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});