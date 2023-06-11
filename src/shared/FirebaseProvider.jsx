import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_CONFIG } from "src/configuration/firebase";

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
        auth: {authInstance: auth, googleProvider: new GoogleAuthProvider(auth)}
    })

    useEffect(() => {
        onAuthStateChanged(auth, user => setValues({...values, user: user}))
    }, [auth])

    return (
        <firebaseContext.Provider value={values}>
            {children}
        </firebaseContext.Provider>
    )
}

export default FirebaseProvider
