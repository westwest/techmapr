import Dashboard from '../features/Dashboard/Dashboard'
import Editor from '../features/Editor/Editor'
import Presenter from '../features/Presenter/Presenter'

const notFound = {
    path: "*", element: <h1>Not Found</h1>
}

const ROUTES = [
    ...Dashboard("/"),
    ...Editor("/radar"),
    ...Presenter("/view"),
    notFound
]

export default ROUTES