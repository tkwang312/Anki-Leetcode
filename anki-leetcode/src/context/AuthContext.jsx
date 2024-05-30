import React, {useState, useEffect, useContext } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider( {children} ) {
  
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);


    // function signup(email, password) {
    //     //firebase command
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => { 
    //         const user = userCredential.user;
    //         console.log(userCredential)
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //         // ..
    //       });
    // }

    useEffect(() => {
        //firebase notifies when a new user is created
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe
    }, [])

    async function initializeUser(user) {
        if ( user ) {
            setCurrentUser({...user});
            setLoggedIn(true);
        } else {
            setCurrentUser(null);
            setLoggedIn(false);
        }
        setLoading(false);
    }

    const value = { currentUser, userLoggedIn, loading }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
