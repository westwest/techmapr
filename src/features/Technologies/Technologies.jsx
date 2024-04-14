import { Navigate, Outlet } from "react-router-dom"

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
    widgets: []
})

export default initialize
