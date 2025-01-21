import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../../public/Firebase/Firebase';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [lodding, setLodding] = useState(true)
    const auth = getAuth(app);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLodding(true)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLodding(true)

    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, CurrenUser => {
            console.log(CurrenUser)
            setUser(CurrenUser)
            setLodding(false)

        })
        return () => unsubscribe();
    }, [])


    const authInfo = {
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