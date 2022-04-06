import "./ProductList.css";
import { VerticalCard } from "../../components/Card/VerticalCard/VerticalCard";
import { useProducts } from "../../context/productContext";
import {
  getSortedProducts,
  getRatedProducts,
  getPriceRangeProducts,
  getCategorizedProducts,
} from "../../utilities/productFilter";

const ProductList = () => {
  const { productState } = useProducts();

  const {
    products,
    category,
    sortBy,
    rating,
    priceRange,
  } = productState;

  const categorizedProducts = getCategorizedProducts(category, products);
  const sortedProducts = getSortedProducts(sortBy, categorizedProducts);
  const ratedProducts = getRatedProducts(rating, sortedProducts);
  const priceRangeProducts = getPriceRangeProducts(priceRange, ratedProducts);
  const filteredProducts = priceRangeProducts;

  return (
    <main>
    <div class="products">
    {filteredProducts.map((product) => {
              return <VerticalCard product={product} key={product._id} />;
            })}
    </div>
    </main>
  );
};

export {ProductList};
