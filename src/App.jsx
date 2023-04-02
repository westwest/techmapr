import { CssBaseline, ThemeProvider, Typography } from "@mui/material"
import { createAppTheme } from "./configuration/theme"

const App = () => {

  return (
    <ThemeProvider theme={createAppTheme()}>
      <CssBaseline>
        <Typography variant="h1">Techmapr</Typography>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
