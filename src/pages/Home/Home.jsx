import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Category } from "../../components/Category/Category";

const Home=()=>{

const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("ERROR OCCURED", error);
      }
    })();
  }, []);

    return(
       <div>
           <Navbar />
        <main>

        <div className="categories">
        {categories.map(({ categoryName, imgURL, id }) => (
              <Category key={id} categoryName={categoryName} imgURL={imgURL} />
            ))}
        </div>

        <div className="banner">
            <img src="/assets/login-img.jpg" alt="banner-img" />
            <div className="banner-content">

                <h1>EVERYTHING YOU NEED FOR YOUR COSMIC LEAP</h1>
                <p>Grab your essentials</p>

                <button><Link to="/Products">Shop Now</Link>
                </button>
            </div>
        </div>

        <div className="featured">
            <div className="feat-heading">
                <h2>Featured In</h2>
            </div>

            <div className="feat-img">
                <img src="/assets/logo/isro_logo.svg" alt="logo" />
            </div>

            <div className="feat-img">
                <img src="/assets/logo/nasa_logo.svg" alt="logo"/>
            </div>

            <div className="feat-img">
                <img src="/assets/logo/esa_logo.svg" alt="logo"/>
            </div>

            <div className="feat-img">
                <img src="/assets/logo/russia_logo.png" alt="logo"/>
            </div>

            <div className="feat-img">
                <img src="/assets/logo/spacex_logo.svg" alt="logo"/>
            </div>

        </div>

        <div className="new-item-card">

            <div className="new-item-card-1">
                <div className="card card-horizontal">
                    <div className="left-part">
                        <img src="/assets/suit-img.jpg" alt="product photo" className="card-img-horizontal" />
                        <div className="card-badge">Best Value</div>
                    </div>

                    <div className="right-part">
                        <div className="card-body">
                            <h3>NEW ARRIVAL</h3>
                            
                            <div className="card-info">Regular Spacesuit (White)
                            </div>
                        </div>
                        <div className="card-btn">
                            <button className="btn btn-primary"><Link to="/Products">Buy Now</Link></button>
                            
                        </div>
                    </div>
                </div>

            </div>

            <div className="new-item-card-1">
                <div className="card card-horizontal">
                    <div className="left-part">
                        <img src="/assets/suit-img.jpg" alt="product photo" className="card-img-horizontal" />
                    </div>

                    <div className="right-part">
                        <div className="card-body">
                            <h3>NEW ARRIVAL</h3>
                            
                            <div className="card-info">Regular Spacesuit (White)
                            </div>
                           
                        </div>
                        <div className="card-btn">
                            <button className="btn btn-primary"><Link to="/Products">Buy Now</Link></button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>

    );

};

export {Home};