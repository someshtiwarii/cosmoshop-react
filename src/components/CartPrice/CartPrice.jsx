import "./CartPrice.css";
import { useCart } from "../../context/cartContext";
import {
  getPrice,
  getDiscountInPrice,
  getTotalPrice,
} from "../../utilities/cartPrice";

const CartPrice = () => {
  const { cart } = useCart();

  const cartPrice = {
    deliveryCharges: 599,
    price: getPrice(cart),
    discountInPrice: getDiscountInPrice(cart),
  };

  const totalPrice = getTotalPrice(
    cart,
    cartPrice.price,
    cartPrice.discountInPrice,
    cartPrice.deliveryCharges
  );

  return (

    <div class="cart-checkout">
                    <div class="price-details-heading">
                        <h3>Price Details</h3>
                    </div>

                    <div class="price-details">
                        <div class="price-detail">
                            <p>Price (<span >{cart.length}</span> items)</p>
                            <p>₹{cartPrice.price}</p>
                        </div>

                        <div class="price-detail">
                            <p>Discount</p>
                            <p>-₹{cartPrice.discountInPrice}</p>
                        </div>

                        <div class="price-detail">
                            <p>Delivery Charges</p>
                            <p>₹1000</p>
                        </div>

                    </div>

                    <div class="total-amount-heading price-detail">
                        <h4>TOTAL AMOUNT</h4>
                        <p>₹{totalPrice}</p>
                    </div>

                    <div class="place-order">
                        <p>You will save ₹{cartPrice.discountInPrice} on this order</p>
                        <button class="btn btn-primary">PLACE ORDER</button>
                    </div>

                </div>
  );
};

export { CartPrice };