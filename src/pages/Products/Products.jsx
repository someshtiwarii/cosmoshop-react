import { Navbar } from "../../components/Navbar/Navbar";
import { Filters } from "../../components/Filters/Filters";
import { ProductList } from "../../components/ProductList/ProductList";
import "./Products.css" ;

const Products = () => {
  return (
    <div>
      <Navbar />
      <div class="main-section">
        <Filters/>
        <ProductList/>
      </div>
    </div>
  );
};

export { Products };