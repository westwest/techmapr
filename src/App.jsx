import { StackedLineChart } from "@mui/icons-material"
import { AppBar, CssBaseline, IconButton, Paper, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ROUTES from "src/configuration/routes"
import { createAppTheme } from "src/configuration/theme"
import { RadarStore } from "src/shared/RadarStore"

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
        <Typography varaint="h6" noWrap>TechnologyMapr</Typography>
      </Toolbar>
    </AppBar>
)

const App = () => {
  return (
    <ThemeProvider theme={createAppTheme()}>
      <CssBaseline />
      <RadarStore>
        <Header />
        <RouterProvider router={createBrowserRouter(ROUTES)} />
      </RadarStore>
    </ThemeProvider>
  )
}

export default App
