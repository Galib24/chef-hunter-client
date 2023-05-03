import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

export  const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    // const user = null;

        // create user
        const createUser = (email, password) => {
            // setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
        }

          // sign in method
    const signIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const logOut = () => {
        // setLoading(true)
        return signOut(auth);
    }
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;