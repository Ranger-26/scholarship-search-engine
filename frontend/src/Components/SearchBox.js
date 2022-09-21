import TextField from "@mui/material/TextField";
import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Scholarship from "./Scholarship";
import data from "../Logic";
import {useState} from "react";

function filter(query){
    if (query === "") return data;
    let newdata = []
    for (let i = 0; i < data.length; i++){
        if (data[i]["name of scholarship"].match(query)){
            newdata.push(data[i]);
        }
    }
    return newdata;
}


function getStuff(query){
    return filter(query).map((number) =>
        <ListItem>
            <ListItemButton>
                <ListItemText primary={number["name of scholarship"]}></ListItemText>
            </ListItemButton>
        </ListItem>
    );
}



export default function SearchBox(props){

    const [query, setQuery] = useState("");

    function OnQuery(query){
        setQuery(query);
    }

    function filter(query){
        if (query === "") return data;
        let newdata = []
        for (let i = 0; i < data.length; i++){
            if (data[i]["name of scholarship"].match(query)){
                newdata.push(data[i]);
            }
        }
        console.log(newdata);
        return newdata;
    }

    return(
     <div className="main">
         <div className="search">
             <TextField
                 id="outlined-basic"
                 variant="outlined"
                 fullWidth
                 label="Search"
                 onChange={(event) => OnQuery(event.target.value)}
             />
         </div>
         <Box sx={{ width: '30%', maxWidth: 450, bgcolor: 'white' }}>
             <List>{getStuff(query)}</List>
         </Box>
     </div>
     )
}