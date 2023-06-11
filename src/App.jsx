import { StackedLineChart } from "@mui/icons-material"
import { AppBar, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createAppTheme } from "src/configuration/theme"
import { RadarStore } from "src/shared/RadarStore"
import FirebaseProvider, { useFirebase } from "./shared/FirebaseProvider"
import { getUserRoutes } from "./features/IAM/iamService"
import UserWidget from "./features/IAM/UserWidget"


const Router = ({children}) => {
  const {user} = useFirebase()
  const routes = getUserRoutes(user)

  return (
    <RouterProvider router={createBrowserRouter(routes)}>
      {children}
    </RouterProvider>
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
        <RadarStore>
          <Header />
          <Router />
        </RadarStore>
      </FirebaseProvider>
    </ThemeProvider>
  )
}

export default App
