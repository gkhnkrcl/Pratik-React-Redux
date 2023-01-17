import {Stack, Paper} from "@mui/material"
import {Link} from "react-router-dom"
import {logo} from "../feed/constant"
import SearchBar from "./SearchBar"


const Navbar = () =>  (
  <Paper elevation={4} sx={{position:"sticky", top:0}}>   
  <Stack direction="row" alignItems="center" sx={{justifyContent:"space-between", borderRadius:"5px"}}>
  <Link to="/" style={{display:"flex", alignItems:"center", marginLeft:"10px"}}>
   <img src={logo} alt="logo" height={25} width={100}></img>
  </Link>
  <SearchBar></SearchBar>
  </Stack>
  </Paper>
  )


export default Navbar