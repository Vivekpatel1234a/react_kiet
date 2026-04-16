import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
const AppR=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/Home' element={<Home/>}/> {/* to navigate to home page '/' */}
            <Route path='/About' element={<About/>}/>  {/* to navigate to about page '/' */}
        </Routes>
        </BrowserRouter>
    )
}
export default AppR;