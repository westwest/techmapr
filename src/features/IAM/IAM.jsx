import { Button, Grid, Typography } from "@mui/material";
import { useFirebase } from "src/shared/FirebaseProvider";

const FEATURE_LABEL="iam"

const ExternalFront = () => {
    const {auth} = useFirebase()

    return (
        <Grid container spacing={2} justifyContent="center" sx={{marginX: t => t.spacing(1)}}>
            <Grid item xs={6}>
                <Typography variant="h1">Overview has never been easier</Typography>
                <Button onClick={auth.initAuth} variant="contained">Get Started</Button>
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

const ROUTES = [
    {path: "", element: <ExternalFront />}
]

const initialize = (_, iam) => ({
    name: FEATURE_LABEL,
    routes: !iam ? ROUTES : []
})

export default initialize