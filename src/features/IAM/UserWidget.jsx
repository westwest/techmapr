import { Button } from "@mui/material"
import { useFirebase, withFirebase } from "src/shared/FirebaseProvider"

const UserWidget = () => {
    const {auth, user} = useFirebase()

    return user ? (
        <Button 
            onClick={auth.signOut}
            color="secondary"
        >
            Sign Out
        </Button>
    ) : (
        <Button onClick={auth.initAuth} variant="contained" color="secondary">
            Sign In
        </Button>
    )
}

export default withFirebase(UserWidget)