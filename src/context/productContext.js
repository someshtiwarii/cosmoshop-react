import {
    createContext,
    useContext,
    useEffect,
    useReducer,
  } from "react";
  import { productReducer, initialProducts } from "../reducer/productReducer";
  import { filterType } from "../constant/filterType";
  import axios from "axios";
  
  const ProductContext = createContext();
  
  const ProductProvider = ({ children }) => {
    const [productState, productDispatch] = useReducer(
      productReducer,
      initialProducts
    );
    
    const { DISPLAY_PRODUCTS } = filterType;
  
    useEffect(() => {
      (async () => {
        const { data } = await axios.get("/api/products");
  
        data.products = data.products.map((product) => ({
          ...product,
          discountPrice: (
            product.price -
            (product.price * product.discount) / 100
          ).toFixed(0),
        }));
  
        productDispatch({
          type: DISPLAY_PRODUCTS,
          payload: { data: data.products },
        });
      })();
    }, []);
  
    return (
      <ProductContext.Provider
        value={{
          productState,
          productDispatch,
          filterType,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  };
  
  const useProducts = () => useContext(ProductContext);
  
  export { ProductProvider, useProducts };