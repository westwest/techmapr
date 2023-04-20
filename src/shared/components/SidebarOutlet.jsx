import { Drawer, styled, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"

const Root = styled('main')(() => ({
    display: "flex",
    width: "100%",
    height: "100%"
}))

const SidebarSurface = styled('aside')(({theme}) => ({
    width: theme.shape.drawerWidth,
    /*
    "& [class*=MuiPaper-root]": {
        padding: theme.spacing(2)
    }*/
}))

const MainContent = styled('article')(({theme}) => ({
    width: `calc(100% - ${theme.shape.drawerWidth}px)`,
    margin: `0 ${theme.spacing(1)}`
})) 

const SidebarOutlet = ({children}) => (
    <Root>
        <SidebarSurface>
            <Drawer 
                variant="permanent" 
                sx={{
                    width: theme => theme.shape.drawerWidth, 
                    flexShrink: 0, 
                    [`& .MuiDrawer-paper`]: { 
                        width: theme => theme.shape.drawerWidth, 
                        boxSizing: 'border-box' 
                    }
                    }} 
                >
                <Toolbar />
                {children}
            </Drawer>
        </SidebarSurface>
        <MainContent>
            <Outlet />
        </MainContent>
    </Root>
)

export default SidebarOutlet
