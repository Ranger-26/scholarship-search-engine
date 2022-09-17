import {ListItem, ListItemButton, ListItemText} from "@mui/material";

export default function Scholarship(props){
    return (
        <ListItem>
            <ListItemButton>
                <ListItemText primary={props.sname}></ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

