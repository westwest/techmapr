import { Add as AddIcon, ArrowBack as ArrowBackIcon, Radar as RadarIcon,  } from "@mui/icons-material"
import { Divider, List } from "@mui/material"
import { Link, Navigate, Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom"
import ClickListItem from "src/shared/components/ClickListItem"
import SidebarOutlet from "src/shared/components/SidebarOutlet"
import { useRadarStore } from "src/shared/RadarStore"
import CreateRadar from "./CreateRadar"
import ItemInfo from "./ItemInfo"
import RadarMeta from "./RadarMeta"
import { AppAtoms, AtomHooks } from "src/shared/atoms"

const items = [{id: "1", name: "Item 1"}, {id: "2", name: "Item 2"}]

const FEATURE_LABEL="Radars"

const Editor = () => {
    const {radarId} = useParams()
    const [params, setSearchParams] = useSearchParams()
    const {getRadar} = useRadarStore()
    const navigate = useNavigate()

    const ADD_TECH_MODAL = "addTech"

    const AddTechModal = AtomHooks.useAtomValue(AppAtoms.appFeaturesAtom)
        .find(f => f.name === "Technologies").modals[ADD_TECH_MODAL]

    
    return (
        <>
            <AddTechModal 
                open={params.get("modal")}
                onClose={() => {
                    params.delete("modal")
                    setSearchParams(params)
                }}
                onSubmit={() => {
                    navigate("./item/1")
                }}
            />
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
                        to={`?modal=${ADD_TECH_MODAL}`}
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

const initialize = (namespace, iam) => ({
    name: FEATURE_LABEL,
    routes: iam ? createRoutes(namespace) : [],
    widgets: [{
        dataSource: () => {
            const {store} = useRadarStore()
            return {data: store}
        },
        key: `${namespace}.widget.listMine`,
        title: `My Radars`,
        type: "list",
        actionProps: {},
        origin: `${namespace}`
    }]
})

export default initialize