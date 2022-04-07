import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import { AuthProvider } from "./context/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>

    <Router>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
