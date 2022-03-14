import React,{useState} from "react";
import { View,StyleSheet } from "react-native";
import PropTypes from "prop-types";
import styles from  "./styles"
import MenuButton from "../MenuButton/MenuButton"
import { logout } from "../../firebase/config";


export default function DrawerContainer({navigation}) {
 
  const signOutUser = () => {
   
        logout()  
}

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="Home"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Products");
            navigation.closeDrawer();
          }}
        />
            <MenuButton
          title="Account"
          // source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Account");
            navigation.closeDrawer();
          }}
        />
               <MenuButton
          title=" Cart"
          // source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Cart");
            navigation.closeDrawer();
          }}
        />
             <MenuButton
          title="Setting"
          // source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Setting");
            navigation.closeDrawer();
          }}
        />
        
    
          <MenuButton 
          title="Logout"
          onPress={() =>{
            signOutUser()
            navigation.navigate('Login')
          }}/>


     
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
