import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const ClickListItem = ({children, icon, onClick, component, ...props}) => (
    <ListItem disablePadding>
        <ListItemButton component={component} onClick={onClick} {...props}>
            {icon && (
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
            )}
            <ListItemText>
                {children}
            </ListItemText>
        </ListItemButton>
    </ListItem>
)

export default ClickListItem
