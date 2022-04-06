import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";
import { Signup } from "../pages/Signup/Signup";
import { Login } from "../pages/Login/Login";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import Mockman from "mockman-js";


const Navroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="*" element={<h1>Oops!</h1>} />
    </Routes>
  );
};

export { Navroute };