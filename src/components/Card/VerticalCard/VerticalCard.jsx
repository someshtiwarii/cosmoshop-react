import "./VerticalCard.css";
import { useWishlist } from "../../../context/wishlistContext";
import { useCart } from "../../../context/cartContext";
import { useAuth } from "../../../context/authContext";

const VerticalCard =({product})=>{

    const {title, price, image ,discount, discountPrice, rating, _id} = product;
    const { wishlist, toggleWishlist } = useWishlist();
    const { cart, addToCartHandler } = useCart();
    const { navigate } = useAuth();


    const itemInWishlist = wishlist.find((item) => item._id === _id);
    const itemInCart = cart.find((item) => item._id === _id);

    return(

    <div className="product-card product-card-1">
                <div className="card">
                    <div className="card-header">
                        <img src={image} alt="product photo" className="card-img" />
                        <div class="card-dismiss"><i className={itemInWishlist ? "fas fa fa-heart" : "fas fa fa-heart-o "}
                        onClick={() => toggleWishlist(product)}
                        ></i></div>
                    </div>
                    <div className="card-body">
                        <div className="card-info">{title}</div>
                            <div class="stars">
                            {[...Array(5)].map((item, i) =>
                                i + 1 > rating ? (
                                    <i class="far fa-star"></i>
                                ) : (
                                    <i class="fas fa-star checked"></i>
                                )
                                )}
                            </div>
                        <div className="price-info">
                            <div className="new-price">
                                ₹{discountPrice}
                            </div>
                            <div className="old-price">
                                {price}
                            </div>
                        </div>
                        <div className="discount-info">
                            Flat <strong>{discount}%</strong> OFF
                        </div>
                    </div>
                    <div className="card-btn">
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                        itemInCart ? navigate("/cart") : addToCartHandler(product)
                        }>
                        {itemInCart ? "Go To Cart" : "Add To Cart"}
                  </button>
                    </div>
                </div>
            </div>

    );
};

export {VerticalCard};