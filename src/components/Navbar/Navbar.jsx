import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useWishlist } from "../../context/wishlistContext";

const Navbar = ()=>{

    const { isAuth, setIsAuth } = useAuth();
    const { wishlist } = useWishlist();

    return(

        <nav>
        <div className="navbar">
            <div className="navbar-logo">
            <Link to="/" className="nav-brand">
             <img src="/assets/cosmoshop_logo.svg" alt="logo"/>
            </Link>
            </div>
            <div className="search-container">
                <i className="fas fa-search search-icon"></i>
                <input type="text" id="search" name="search" placeholder="Search" className="search-input" />
            </div>
            <div className="cta">
           
        {!isAuth ? (
            <Link to="/login" className="icon login" title="Login">
              <button class="btn btn-primary">Login</button>
            </Link>
          ) : (
            <Link
              to="/"
              className="icon logout"
              title="Logout"
              onClick={() => {
                localStorage.removeItem("token");
                setIsAuth(false);
              }}
            >
              <button class="btn btn-primary">Logout</button>
            </Link>
          )}
    
                <div className="badge navbar-icon">
                    <Link to="/Wishlist"><i className="fas fa-heart fa-2x"></i></Link>
                    <div className="notification notification-badge">
                       {isAuth ? <span>{wishlist.length}</span> : 0} 
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