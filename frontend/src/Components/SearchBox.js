import TextField from "@mui/material/TextField";
import {Box, List} from "@mui/material";
import Scholarship from "./Scholarship";
import {useState} from "react";

export default function SearchBox(){

    const [query, setQuery] = useState("");

    return(
     <div className="main">
         <div className="search">
             <TextField
                 id="outlined-basic"
                 variant="outlined"
                 fullWidth
                 label="Search"
                 onChange={(event) => setQuery(event.target.value)}
             />
         </div>
         <Box sx={{ width: '30%', maxWidth: 450, bgcolor: 'white' }}>
             <List>
                 {query === "Y" &&
                     <>
                         {

                         }
                     </>
                 }
             </List>
         </Box>
     </div>
 )
}