import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box} from "@mui/material";
import {Navbar,Feed,SearchFeed,VideoDetail,ChannelDetail} from "."


const App =()=> (
  <BrowserRouter>
  <Box >
    <Navbar/>
  <Routes>
    <Route path="/" exact element={<Feed></Feed>}></Route>
    <Route path="/video/:id" element={<VideoDetail/>}></Route>
    <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
    <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>  
  </Routes>
  </Box>
  </BrowserRouter>
)
 


export default App;
