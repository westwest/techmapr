import { Navigate, Outlet } from "react-router-dom"
import { useGetTechnologies } from "./useGetTechnologies"
import AddTechModal from "./AddTechModal"

const FEATURE_LABEL="Technologies"

const CreateTech = () => {
    return (
        <>Create Tech</>
    )
}

const createRoutes = namespace =>  [
    {
        path: namespace, 
        element: <Outlet />,
        children: [
            { path: "", element: <Navigate to="new" />},
            { path: "new", element: <CreateTech />},
            {
                path: ":techId", 
                element: <></>//<Technology />,
            },
        ]
    },
]

const initialize = (namespace, iam) => ({
    name: FEATURE_LABEL,
    routes: iam ? createRoutes(namespace) : [],
    widgets: [{
        dataSource: useGetTechnologies,
        key: `${namespace}.widget.listall`,
        title: `Technologies`,
        type: "list",
        actionProps: {},
        origin: `${namespace}`
    }],
    modals: [
        {
            key: "addTech",
            modal: AddTechModal
        }
    ]
})

export const MODAL_KEYS = {
    
}

export default initialize
