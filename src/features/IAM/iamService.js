import { signInWithRedirect, signOut } from "firebase/auth"
import {APP_MODULES} from "src/configuration/modules"

export const appSignIn = async auth => signInWithRedirect(auth.authInstance, auth.googleProvider)

export const appSignOut = async auth => signOut(auth.authInstance)

//For now, settle with checking if user is logged in
//Otherwise just provide a login route
export const getUserRoutes = (currentUser) => 
    APP_MODULES.flatMap(m => m.module(m.namespace, currentUser))
    