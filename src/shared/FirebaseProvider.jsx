import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { FIREBASE_CONFIG } from "src/configuration/firebase";

const STORAGE_KEY = "firebase"

export const initFirebase = async () => {
    const app = await initializeApp(FIREBASE_CONFIG);
}

const firebaseContext = createContext({})

export const useFirebase = () => useContext(firebaseContext)

export const withFirebase = (Component) => {
    const newComponent = (props) => (
        <firebaseContext.Consumer>
            {(firebase) => <Component {...props} firebase={firebase} />}
        </firebaseContext.Consumer>
    )
    newComponent.displayName = Component.displayName ?? Component.name
    return newComponent
}

const FirebaseProvider = ({children, firebaseApp}) => {
    const auth = getAuth(firebaseApp)
    const [values, setValues] = useState({
        auth: {
            authInstance: auth, 
            initAuth: () => {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify({loading: true}))
                signInWithRedirect(auth, new GoogleAuthProvider(auth))
            },
            signOut: () => signOut(auth)
        },
        loading: false
    })

    const setUser = user => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({loading: false}))
        setValues({...values, loading: false, user: user})
    }

    useEffect(() => {
        const loading = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
        setValues({...values, loading})
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, user => setUser(user))
    }, [auth])

    return (
        <firebaseContext.Provider value={values}>
            {children}
        </firebaseContext.Provider>
    )
}

export default FirebaseProvider
