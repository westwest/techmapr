import { Typography } from "@mui/material"

const Editor = () => (
    <Typography variant="h2">Editor</Typography>
)

const createRoutes = namespace => [
    {path: namespace, element: <Editor />}
]

export default createRoutes