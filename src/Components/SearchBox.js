import TextField from "@mui/material/TextField";
import {Box, List} from "@mui/material";
import Scholarship from "./Scholarship";

export default function SearchBox(){
 return(
     <div className="main">
         <div className="search">
             <TextField
                 id="outlined-basic"
                 variant="outlined"
                 fullWidth
                 label="Search"
             />
         </div>
         <Box sx={{ width: '30%', maxWidth: 450, bgcolor: 'white' }}>
             <List>
                <Scholarship sname={"Niche's 50k No-Essay Scholarship"}></Scholarship>
                <Scholarship sname={"Niche's 50k No-Essay Scholarship"}></Scholarship>
                <Scholarship sname={"Niche's 50k No-Essay Scholarship"}></Scholarship>
             </List>
         </Box>

     </div>
 )
}