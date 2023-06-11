import { Typography } from "@mui/material"

const Presenter = () => (
    <Typography variant="h2">Presenter</Typography>
)

const createRoutes = (namespace, iam) => iam ? [
    {path: namespace, element: <Presenter />}
] : []

export default createRoutes