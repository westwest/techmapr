import { Navigate, Outlet } from "react-router-dom"


const CreateTech = () => {
    return (
        <>Create Tech</>
    )
}

const createRoutes = (namespace, iam) => iam ? [
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
] : []

export default createRoutes
