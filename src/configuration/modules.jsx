import Dashboard from 'src/features/Dashboard/Dashboard'
import Radars from 'src/features/Radars/Radars'
import Technologies from 'src/features/Technologies/Technologies'
import IAM from 'src/features/IAM/IAM'
import Presenter from 'src/features/Presenter/Presenter'

const notFound = {
    path: "*", element: <h1>Not Found</h1>
}

export const APP_MODULES = [
    {module: Dashboard, namespace: "/"},
    {module: Radars, namespace: "/radars"},
    {module: Technologies, namespace: "/technologies"},
    {module: Presenter, namespace: "/view"},
    {module: IAM, namespace: "/auth"},
    {module: () => ({ name: "404", routes: [notFound]}), namespace: ""}
]
