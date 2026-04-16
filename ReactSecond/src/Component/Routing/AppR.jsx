import { BrowserRouter, Routes , Route } from "react-router-dom";
//
import Details from "./Details";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
const AppR=()=>{
    return(
        <BrowserRouter>{/* to wrap the entire application with BrowserRouter bcz it provides the routing functionality */}
        <Navbar/>  {/* to display the navigation bar on all pages and inside this  */}
        <Routes>  {/* to define the routes for the application */}
            <Route path='/' element={<Home/>}/> {/* to navigate to home page '/' */}
            <Route path='/About' element={<About/>}/>  {/* to navigate to about page '/'     agr path='/About' milta hai to <About/> component render krana hai */}
            <Route path='/details/:id' element={<Details/>}/> {/* to navigate to details page '/'     agr path='/details/:id' milta hai to <Details/> component render krana hai */}
        </Routes>
        </BrowserRouter>
    )
}
export default AppR;