import React, { useState, createContext,useEffect } from "react";


import firebase,{signIn,auth,logout,signUp} from "../../firebase/config"

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    useEffect(() => {

        const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
          try {
            await (authUser ? setUser(authUser) : setUser(null));
            setLoading(false);
          } catch (e) {
         console.log(error)
          }
        });
        
        return unsubscribeAuth;
      }, []);
     
      const handleSignUp = async (email,password) => {
        try {
            
            await signUp(email, password);
        } catch (error) {
            console.log(error);
          }
       
        firebase.firestore().collection('users').doc(auth.currentUser.uid).set({
            name: user.name,
            email: user.email,
            uid: auth.currentUser.uid,
        }).then(() => {
            alert("user created")
        }).catch((e) => {
       console.log(e)
        })
    }
      const handleSignIn = async (email,password) => {
        try{
            await signIn(email.trim(), password);
        }
        catch (error) {
            console.log(error);
          }
       
    }

    const signOutUser =async () => {
   
        try{

            logout()

        }
        catch (error) {
            console.log(error);
          }
}
   function getUser() {
    return auth.user
  }



    return (
        <AuthenticationContext.Provider
            value={{
                
                user,
                isLoading,
                getUser,
                handleSignUp,
                handleSignIn,
                signOutUser,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};