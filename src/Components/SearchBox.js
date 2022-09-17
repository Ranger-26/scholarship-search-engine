import TextField from "@mui/material/TextField";

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
     </div>
 )
}