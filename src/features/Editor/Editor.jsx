import { Add as AddIcon, ArrowBack as ArrowBackIcon, Radar as RadarIcon,  } from "@mui/icons-material"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, TextField } from "@mui/material"
import { Link, Navigate, Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom"
import ClickListItem from "src/shared/components/ClickListItem"
import SidebarOutlet from "src/shared/components/SidebarOutlet"
import { useRadarStore } from "src/shared/RadarStore"
import CreateRadar from "./CreateRadar"
import ItemInfo from "./ItemInfo"
import RadarMeta from "./RadarMeta"

const items = [{id: "1", name: "Item 1"}, {id: "2", name: "Item 2"}]

const Editor = () => {
    const {radarId} = useParams()
    const [params, setSearchParams] = useSearchParams()
    const {getRadar} = useRadarStore()
    const navigate = useNavigate()
    
    return (
        <>
            <Dialog open={params.get("modal")}>
                <DialogTitle>Add Technology</DialogTitle>
                <DialogContent>
                    <TextField fullWidth label="Name" variant="standard" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        params.delete("modal")
                        setSearchParams(params)
                    }}>Cancel</Button>
                    <Button onClick={() => navigate("./item/1")}>Add</Button>
                </DialogActions>
            </Dialog>
            <SidebarOutlet>
                <List>
                    <ClickListItem
                        component={Link}
                        icon={<ArrowBackIcon />}
                        to={"/"}
                    >
                        Dashboard
                    </ClickListItem>
                    <Divider />
                    <ClickListItem
                        component={Link}
                        icon={<RadarIcon />}
                        to={"./"}
                    >
                        Radar: {getRadar(radarId).name}
                    </ClickListItem>
                    <Divider />
                    { items.map(item => (
                        <ClickListItem
                            component={Link}
                            key={item.id}
                            to={`./item/${item.id}`}
                        >
                            {item.name}
                        </ClickListItem>
                    ))}
                    <ClickListItem
                        component={Link}
                        icon={<AddIcon />}
                        to={"?modal=new"}
                    >
                        Add Technology
                    </ClickListItem>
                </List>
            </SidebarOutlet>
        </>
    )
}

const createRoutes = namespace => [
    {
        path: namespace, 
        element: <Outlet />,
        children: [
            { path: "", element: <Navigate to="new" />},
            { path: "new", element: <CreateRadar />},
            {
                path: ":radarId", 
                element: <Editor />,
                children: [
                    {path: "", element: <RadarMeta />},
                    {path: "item/:itemId", element: <ItemInfo />}
                ]
            },
        ]
    },
]

export default createRoutes