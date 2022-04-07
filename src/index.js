import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import { AuthProvider } from "./context/authContext";
import { WishlistProvider } from "./context/wishlistContext";
import { CartProvider } from "./context/cartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <AuthProvider>
        <ProductProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
