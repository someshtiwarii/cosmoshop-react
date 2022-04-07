import "./CartCard.css";
import { useCart } from "../../../context/cartContext";

const CartCard = ({ product }) => {
  const { title, qty, price, image } = product;

  const { removeFromCartHandler, updateQtyHandler, moveToWishlistHandler } =
    useCart();

  return (
    <div className="cart-item">

    <div className="card card-horizontal">
        <div className="left-part">

            <img src={image} alt="product photo" className="card-img-horizontal" />
        </div>

        <div className="right-part">
            <div className="card-body">
                <div className="card-info">{title}</div>
                <div className="price-info">
                    <div className="new-price">
                        ₹{price}
                    </div>
                    
                </div>
                
                <div className="quantity">
                    <p>Quantity : </p>

                    <button className="qty-btn"
                    onClick={() => updateQtyHandler(product, "decrement")}>
                        <i className="fas fa-minus fab-1"></i>
                    </button>

                    <input type="number"  name="quantity" value={qty} title="Qty"
                        className="input-text-qty" readonly />

                    <button className="qty-btn"
                    onClick={() => updateQtyHandler(product, "increment")}>
                        <i className="fas fa-plus fab-1"></i>
                    </button>

                </div>
            </div>
            <div className="card-btn">
                <button className="btn btn-primary" onClick={() => removeFromCartHandler(product)}>Remove from cart</button>
                <button className="btn btn-primary-outline" onClick={() => moveToWishlistHandler(product)}>Move to Wishlist</button>
            </div>
        </div>
    </div>

</div>
  );
};

export { CartCard };