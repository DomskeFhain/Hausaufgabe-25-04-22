import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/impressum">Impressum</Link>
            <Link to="/faq">FAQ</Link>    
            <Link to="/about">About</Link>
        </nav>
    );
  }

  export default Navbar;