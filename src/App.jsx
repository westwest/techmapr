import { StackedLineChart } from "@mui/icons-material"
import { AppBar, CircularProgress, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { createAppTheme } from "src/configuration/theme"
import { RadarStore } from "src/shared/RadarStore"
import FirebaseProvider, { useFirebase } from "./shared/FirebaseProvider"
import UserWidget from "./features/IAM/UserWidget"
import { APP_MODULES } from "./configuration/modules"
import QueryClientProvider from "./shared/QueryClientProvider"

const AppRoot = ({firebaseLoading}) => (
  <>
    <Header />
    {!firebaseLoading ? <Outlet /> : <CircularProgress />}
  </>
)

const Router = () => {
  const {user, loading} = useFirebase()
  const userModules = APP_MODULES.flatMap(m => m.module(m.namespace, user))

  const routes = [{
    path: "/", 
    element: <AppRoot firebaseLoading={loading} />, 
    children: userModules}]

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

const App = ({firebase}) => {

  return (
    <ThemeProvider theme={createAppTheme()}>
      <CssBaseline />
      <FirebaseProvider firebaseApp={firebase}>
        <QueryClientProvider>
          <RadarStore>
            <Router />
          </RadarStore>
        </QueryClientProvider>
      </FirebaseProvider>
    </ThemeProvider>
  )
}

export default App
