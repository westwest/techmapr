import { Fragment } from 'react'
import { Button, Card, CardContent, CardHeader, CircularProgress, Divider, Grid, List, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import ClickListItem from "src/shared/components/ClickListItem"
import { useRadarStore } from "src/shared/RadarStore"
import { useGetTechnologies } from '../Technologies/useGetTechnologies'

const ListWidget = ({dataProvider, title}) => {
    const {data: items, isLoading, sourceFeature} = dataProvider()

    return isLoading ? <CircularProgress /> : (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <List>
                    {items.map(i => (
                        <Fragment key={i.id}>
                            <ClickListItem component={Link} to={`/${sourceFeature}/${i.id}`}>{i.name}</ClickListItem>
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
            <ListWidget dataProvider={() => {
                const {store} = useRadarStore()
                return {data: store, sourceFeature: "radars"}
                }} title="My Radars" />
        </Grid>
        <Grid item xs={4}>
            <ListWidget dataProvider={() => {
                return {...useGetTechnologies(), sourceFeature: "technologies" }
                }} title="Technologies" />
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
                    <Button component={Link} to="radars/new">Create New Radar</Button>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
)

const createRoutes = (namespace, iam) => iam ? [
    {path: namespace, element: <Dashboard />}
] : []

export default createRoutes