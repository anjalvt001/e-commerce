import './Header.css';
import {  Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link to='/' style={{ textDecoration:'none', color:'#fff' }}>
        <h1>Fashion Store</h1>
      </Link>
        <Link to='/logout'>
          <button>Logout</button>
        </Link>
        
    </header>
  )
}

export default Header;
