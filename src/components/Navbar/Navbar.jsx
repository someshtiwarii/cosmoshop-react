import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ()=>{

    return(

        <nav>
        <div className="navbar">
            <div className="navbar-logo">
            <Link to="/" classNameName="nav-brand">
             <img src="/assets/cosmoshop_logo.svg" alt="logo"/>
            </Link>
            </div>
            <div className="search-container">
                <i className="fas fa-search search-icon"></i>
                <input type="text" id="search" name="search" placeholder="Search" className="search-input" />
            </div>
            <div className="cta">
                <button className="btn btn-primary"><Link to="/Login">Login</Link></button>

                <div className="badge navbar-icon">
                    <Link to="/Wishlist"><i className="fas fa-heart fa-2x"></i></Link>
                    <div className="notification notification-badge">
                        <span>2</span>
                    </div>
                </div>

                <div className="badge navbar-icon">
                    <Link to="/Cart"><i className="fas fa-shopping-cart fa-2x"></i></Link>
                    <div className="notification notification-badge">
                        <span>2</span>
                    </div>
                </div>

            </div>
        </div>
    </nav>

    )
}

export {Navbar};