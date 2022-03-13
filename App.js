import 'react-native-reanimated';
import React,{useState} from 'react'
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from './src/components/Navigation/Navigator'
 import {AuthenticationContextProvider} from "./src/context/Auth/AuthContext"
 import { SplashScreen } from './src/components/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {CartProvider } from './src/context/Cart/CartContext';

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [state, updateState] = useState({
    fontLoaded: false,
  });
  if (!state.fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => updateState({ ...state, fontLoaded: true })}
        onError={(error) => {}}
      />
    );
  }

  return (

   <SafeAreaProvider>
     <AuthenticationContextProvider>
 
       <CartProvider>
    
     <SplashScreen/>
       <Navigator/>
       
       </CartProvider>

</AuthenticationContextProvider>
</SafeAreaProvider>
 
  
  );
}


