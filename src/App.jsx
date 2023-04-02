import { StackedLineChart } from "@mui/icons-material"
import { AppBar, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { createAppTheme } from "./configuration/theme"

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
      <CssBaseline>
        <Header />
        <Typography variant="h1">Techmapr</Typography>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
