import { Typography } from "@mui/material"

const FEATURE_LABEL="presenter"

const Presenter = () => (
    <Typography variant="h2">Presenter</Typography>
)

const createRoutes = namespace => [
    {path: namespace, element: <Presenter />}
]

const initialize = (namespace, iam) => ({
    name: FEATURE_LABEL,
    routes: iam ? createRoutes(namespace) : []
})

export default initialize