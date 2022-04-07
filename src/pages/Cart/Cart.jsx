import "./Cart.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { CartCard } from "../../components/Card/CartCard/CartCard";
import { CartPrice } from "../../components/CartPrice/CartPrice";
import { useCart } from "../../context/cartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
    <Navbar />

    <div className="cart-section">
        <main>
            <div className="cart-item">

                <div className="cart-heading">
                    <h1>My Cart (<span>{cart.length}</span>)</h1>
                </div>

                {cart.length > 0 ? (
                  <div className="cart-items">
                    <div className="cart-body">
                      {cart.map((cartItem) => (
                        <CartCard product={cartItem} key={cartItem._id} />
                      ))}
                    </div>
      
                    <div className="cart-checkout">
                      <CartPrice />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1>There's nothing here</h1>
                  </div>
                ) }       
            </div>
        </main>
    </div>
    </div>

  );
};

export {Cart};