import TextField from "@mui/material/TextField";
import {Box, List} from "@mui/material";
import Scholarship from "./Scholarship";
import {useState} from "react";
import Logic from "../Logic";
import allJsonData from "../Logic";
export default function SearchBox(props){

    const [query, setQuery] = useState("");

    function OnQuery(query){
        setQuery(query);
        console.log(allJsonData)
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
             <List>

             </List>
         </Box>
     </div>
     )
}