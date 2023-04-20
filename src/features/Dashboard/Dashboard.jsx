import { Fragment } from 'react'
import { Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import ClickListItem from "src/shared/components/ClickListItem"
import { useRadarStore } from "src/shared/RadarStore"

const ListWidget = ({dataProvider, title}) => {
    const {store: items} = dataProvider()

    return (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <List>
                    {items.map(i => (
                        <Fragment key={i.id}>
                            <ClickListItem component={Link} to={`/radar/${i.id}`}>{i.name}</ClickListItem>
                            <Divider />
                        </Fragment>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}

const Dashboard = () => (
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <ListWidget dataProvider={useRadarStore} title="My Radars" />
        </Grid>
        <Grid item xs={4}>
            <Card>
                <CardHeader title="My Recent Activity" />
                <CardContent>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <CardHeader title="Followed Radars" />
                <CardContent>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <CardContent>
                    <TextField fullWidth label="Radar Search" />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card>
                <CardContent>
                    <Button component={Link} to="radar/new">Create New Radar</Button>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
)

const createRoutes = namespace => [
    {path: namespace, element: <Dashboard />}
]

export default createRoutes