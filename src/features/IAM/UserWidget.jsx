import { Button } from "@mui/material"
import { appSignIn, appSignOut } from "./iamService"
import { useFirebase, withFirebase } from "src/shared/FirebaseProvider"

const UserWidget = () => {
    const {auth, user} = useFirebase()

    return user ? (
        <Button 
            onClick={() => appSignOut(auth)}
            color="secondary"
        >
            Sign Out
        </Button>
    ) : (
        <Button onClick={() => appSignIn(auth)} variant="contained" color="secondary">
            Sign In
        </Button>
    )
}

export default withFirebase(UserWidget)