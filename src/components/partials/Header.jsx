import { Link } from "react-router-dom";

function Header() {
    return ( 
        <>
            <Link to='/'>Home</Link> {' | '}
            <Link to='/about'>About</Link> {' | '}
            <Link to='/blog'>Blog</Link> {' | '}
            <Link to='/projects'>Projects</Link>
        </> 
    );
}

export default Header;