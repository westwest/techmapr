import Dashboard from 'src/features/Dashboard/Dashboard'
import Editor from 'src/features/Editor/Editor'
import IAM from 'src/features/IAM/IAM'
import Presenter from 'src/features/Presenter/Presenter'

const notFound = {
    path: "*", element: <h1>Not Found</h1>
}

export const APP_MODULES = [
    {module: Dashboard, namespace: "/"},
    {module: Editor, namespace: "/radar"},
    {module: Presenter, namespace: "/view"},
    {module: IAM, namespace: "/auth"},
    {module: () => [notFound], namespace: ""}
]
