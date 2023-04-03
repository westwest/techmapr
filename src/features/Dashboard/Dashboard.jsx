import { Typography } from "@mui/material"

const Dashboard = () => (
    <Typography variant="h2">Dashboard</Typography>
)

const createRoutes = namespace => [
    {path: namespace, element: <Dashboard />}
]

export default createRoutes