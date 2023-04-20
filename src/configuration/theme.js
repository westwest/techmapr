import { createTheme } from "@mui/material"

const THEME_CONF = {
    shape: {
        drawerWidth: 240
    }
}

export const createAppTheme = () => createTheme(THEME_CONF)