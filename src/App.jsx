import { StackedLineChart } from "@mui/icons-material"
import { AppBar, CircularProgress, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { createAppTheme } from "src/configuration/theme"
import { RadarStore } from "src/shared/RadarStore"
import { useFirebase } from "./shared/FirebaseProvider"
import UserWidget from "./features/IAM/UserWidget"
import { APP_MODULES } from "./configuration/modules"
import QueryClientProvider from "./shared/QueryClientProvider"
import { AppAtoms, AtomHooks } from "./shared/atoms"
import { useEffect } from "react"

const AppRoot = ({firebaseLoading}) => (
  <>
    <Header />
    {!firebaseLoading ? <Outlet /> : <CircularProgress />}
  </>
)

const Router = () => {
  const {loading} = useFirebase()
  const modules = AtomHooks.useAtomValue(AppAtoms.appFeaturesAtom)
  const moduleRoutes = modules.flatMap(m => m.routes)

  const routes = [{
    path: "/", 
    element: <AppRoot firebaseLoading={loading} />, 
    children: moduleRoutes}]

  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  )
} 

const Header = () => (
  <AppBar position="sticky" sx={{ zIndex: theme => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="Home"
        >
          <StackedLineChart />
        </IconButton>
        <Typography varaint="h6" noWrap sx={{flexGrow: 1}}>TechnologyMapr</Typography>
        <UserWidget />
      </Toolbar>
    </AppBar>
)

const AppInitializer = ({user}) => {
  const modules = APP_MODULES.map(m => m.module(m.namespace, user)).filter(m => m) ?? []
  const setModules = AtomHooks.useSetAtom(AppAtoms.appFeaturesAtom)

  useEffect(() => {
    setModules(modules)
  }, [user])
  
  
}

const App = () => {
  const {user} = useFirebase()

  return (
    <ThemeProvider theme={createAppTheme()}>
      <CssBaseline />
        <QueryClientProvider>
          <AppInitializer user={user} />
          <RadarStore>
            <Router />
          </RadarStore>
        </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
