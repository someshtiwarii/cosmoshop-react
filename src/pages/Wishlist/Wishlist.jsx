import "./Wishlist.css"
import { Navbar } from "../../components/Navbar/Navbar";
import { useWishlist } from "../../context/wishlistContext";
import { VerticalCard } from "../../components/Card/VerticalCard/VerticalCard";


const Wishlist = () => {

  const { wishlist } = useWishlist();

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="wishlist-section">
        <main>
            <div className="wishlist-container">
                <div className="wishlist-heading">
                    <h1>My Wishlist ({wishlist.length})</h1>
                </div>

                {wishlist.length > 0 ? (
                  <div className="wishlist-item">
                    {wishlist.map((wishlistItem) => (
                      <VerticalCard product={wishlistItem} key={wishlistItem._id} />
                    ))}

                    </div>
                    ) : (
                      <h1>Sorry, theres' nothing here!</h1>
                    )}
                  </div>
        </main>

    </div>

    </div>
  );
};

export { Wishlist };