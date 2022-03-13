import 'react-native-gesture-handler';
import {Text,LogBox,StyleSheet} from 'react-native'
import React,{useContext} from 'react'
import {AuthenticationContext} from "../../context/Auth/AuthContext"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistrationScreen from "../../screen/Auth/RegisterScreen"
import LoginScreen from "../../screen/Auth/LoginScreen"
 import DrawerContainer from "../Drawer/DrawerContainer"
 import { ProductsList } from "../../screen/ProductsList";
import { ProductDetails } from '../../screen/ProductDetails';
import { Cart } from '../../screen/Cart';
import { CartIcon } from '../CartIcon';


LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

const AuthStack = createStackNavigator();
const Stack = createStackNavigator();

export default function App() {
  const {isLoading,user} =useContext(AuthenticationContext)

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  const ProductStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        }
    }}>
        
      <Stack.Screen name='Products'
       component={ProductsList} 
      options={({ navigation }) => ({
        title: 'Home',
        headerTitleStyle: styles.headerTitle,
        headerRight: () => <CartIcon navigation={navigation}/>
      })}/>

      <Stack.Screen name='ProductDetails' 
      component={ProductDetails} 
      options={({ navigation }) => ({
        title: 'Product details',
        headerTitleStyle: styles.headerTitle,
        headerRight: () => <CartIcon navigation={navigation}/>,
      })} />

      <Stack.Screen name='Cart' component={Cart} 
      options={({ navigation }) => ({
        title: 'My cart',
        headerTitleStyle: styles.headerTitle,
        headerRight: () => <CartIcon navigation={navigation}/>,
      })} />
    </Stack.Navigator>
      
 
    )
  }


  const Auth =()=>{
    return(

      <AuthStack.Navigator 
      screenOptions={{ headerShown: false }}
      >
      <AuthStack.Screen name='Login'component={LoginScreen}/>
      <AuthStack.Screen name='Registration'component={RegistrationScreen}/>
      </AuthStack.Navigator>
  
    )
  }
  const Drawer = createDrawerNavigator();
  function DrawerStack() {
    return(
      <Drawer.Navigator
        drawerPosition='left'
        initialRouteName='Main'
        drawerStyle={{
          width: 250
        }}
        screenOptions={{headerShown: false}}
        drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
      >
        <Drawer.Screen name='Main' component={ ProductStack}/>
      </Drawer.Navigator>
    )
  } 

  return (

<NavigationContainer>

  
 {user?  <DrawerStack/>:<Auth/>}


</NavigationContainer>
  
  )
} 
const styles = StyleSheet.create({
  headerTitle:{
    fontSize:14
  }
});
