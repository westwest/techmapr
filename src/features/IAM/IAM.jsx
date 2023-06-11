import { Button, Grid, Typography } from "@mui/material";
import { appSignIn } from "./iamService";
import { useFirebase } from "src/shared/FirebaseProvider";

const ExternalFront = () => {
    const {auth} = useFirebase()

    return (
        <Grid container spacing={2} justifyContent="center" sx={{marginX: t => t.spacing(1)}}>
            <Grid item xs={6}>
                <Typography variant="h1">Overview has never been easier</Typography>
                <Button onClick={() => appSignIn(auth)} variant="contained">Get Started</Button>
            </Grid>
            <Grid 
                item
                sx={{
                    backgroundImage: "url('/mapping_illustration.jpeg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                xs={6}
            />
        </Grid>
    )
}

const createRoutes = (_, iam) => !iam ? [
    {path: "", element: <ExternalFront />}
] : []

export default createRoutes