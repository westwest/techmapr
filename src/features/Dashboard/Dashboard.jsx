import { Fragment } from 'react'
import { Button, Card, CardContent, CardHeader, CircularProgress, Divider, Grid, List, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import ClickListItem from "src/shared/components/ClickListItem"
import { AppAtoms, AtomHooks } from 'src/shared/atoms'

const FEATURE_LABEL="dashboard"

const ListWidget = ({dataProvider, origin, title}) => {
    const {data: items, isLoading} = dataProvider()

    return isLoading ? <CircularProgress /> : (
        <Card>
            <CardHeader title={title} />
            <CardContent>
                <List>
                    {items.map(i => (
                        <Fragment key={i.id}>
                            <ClickListItem component={Link} to={`${origin}/${i.id}`}>{i.name}</ClickListItem>
                            <Divider />
                        </Fragment>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}

const Dashboard = () => {
    const extWidgets = AtomHooks.useAtomValue(AppAtoms.appFeaturesAtom)
        .filter(modules => modules?.widgets?.length > 0)
        .flatMap(modules => modules.widgets)
    
    return (
        <Grid container spacing={2}>
            { extWidgets.map(({dataSource, ...w}) => (
                    <Grid item key={w.key} xs={4}>
                        <ListWidget dataProvider={dataSource} {...w} />
                    </Grid>
                )
            )}
            
            
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
}

const createRoutes = namespace => ([
    {path: namespace, element: <Dashboard />}
])

const initialize = (namespace, iam) => iam ? ({
    name: FEATURE_LABEL,
    routes: createRoutes(namespace)
}) : undefined

export default initialize