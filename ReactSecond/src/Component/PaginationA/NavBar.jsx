import { Link } from 'react-router-dom';
const NavBar=()=>{
    return(
        <nav>
            <Link to='/Home'>Home</Link> {/* to navigate to home page '/' */}
            <Link to='/About'>About</Link> {/* to navigate to home page '/' */}
        </nav>
    );
}
export default NavBar;      