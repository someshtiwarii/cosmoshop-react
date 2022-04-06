import "./Filters.css";
import { useProducts } from "../../context/productContext";

const Filters = () =>{

  const {
    productState,
    productDispatch,
    filterType,
  } = useProducts();

  const {
      CATEGORY,
      SORT_BY,
      RATING,
      PRICE_RANGE,
      CLEAR_FILTERS,
    } = filterType;

    
    return (

        <aside>
        <div className="left-tab filters-tab">
            <h3>Filter</h3>
            <button className="btn btn-link" 
             onClick={() =>
              productDispatch({
                type: CLEAR_FILTERS,
                payload: { data: productState.products },
              })
            }>Clear</button>
        </div>

        <div className="left-tab price-tab">
            <h3>Price</h3>

            <div className="price-range">
                <p>0k</p>
                <p>25k</p>
                <p>50k</p>
                <p>75k</p>
                <p>100k</p>
            </div>
            <input  type="range"
              list="steplist"
              min="0"
              max="100000"
              step="25000"
              value={productState.priceRange}
              onChange={(e) =>
                productDispatch({
                  type: PRICE_RANGE,
                  payload: { value: e.target.value },
                })
              } />
              
            <datalist id="steplist">
              <option>0</option>
              <option>25000</option>
              <option>50000</option>
              <option>75000</option>
              <option>100000</option>
            </datalist>

        </div>

        <div className="left-tab category-tab">
            <h3>Category</h3>
            <input type="checkbox"
                value="men"
                checked={productState.category.includes("men")}
                onChange={(e) =>
                  productDispatch({
                    type: CATEGORY,
                    payload: { value: e.target.value },
                  })
                }/>
            <label for="suit">Men</label><br/>

            <input type="checkbox"
                value="women"
                checked={productState.category.includes("women")}
                onChange={(e) =>
                  productDispatch({
                    type: CATEGORY,
                    payload: { value: e.target.value },
                  })
                }/>
            <label for="boot">Women</label><br/>

            <input type="checkbox"
                value="kids"
                checked={productState.category.includes("kids")}
                onChange={(e) =>
                  productDispatch({
                    type: CATEGORY,
                    payload: { value: e.target.value },
                  })
                }/>
            <label for="suit">Kids</label><br/>

            <input type="checkbox"
                value="electronics"
                checked={productState.category.includes("electronics")}
                onChange={(e) =>
                  productDispatch({
                    type: CATEGORY,
                    payload: { value: e.target.value },
                  })
                }/>
            <label for="suit">Electronics</label><br/>

            <input type="checkbox"
                value="skincare"
                checked={productState.category.includes("skincare")}
                onChange={(e) =>
                  productDispatch({
                    type: CATEGORY,
                    payload: { value: e.target.value },
                  })
                }/>
            <label for="suit">Skincare</label><br/>
        </div>


        <div className="left-tab rating-tab">
            <h3>Rating</h3>

            <input type="radio"
                name="rating"
                checked={productState.rating === 4}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 4 } })
                }/>
            <label for="fourstars">4 stars & above</label><br/>

            <input type="radio"
                name="rating"
                checked={productState.rating === 3}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 3 } })
                }/>
            <label for="threestars">3 stars & above</label><br/>

            <input type="radio"
                name="rating"
                checked={productState.rating === 2}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 2 } })
                }/>
            <label for="twostars">2 stars & above</label><br/>

            <input type="radio"
                name="rating"
                checked={productState.rating === 1}
                onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 1 } })
                }/>
            <label for="onestars">1 star & above</label><br/>

        </div>

        <div className="left-tab sort-by-tab">
            <h3>Sort by</h3>

            <input  type="radio"
                name="sort"
                checked={productState.sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  productDispatch({
                    type: SORT_BY,
                    payload: { value: "LOW_TO_HIGH" },
                  })
                }/>
            <label for="lowtohigh">Price - Low to High</label><br/>

            <input  type="radio"
                name="sort"
                checked={productState.sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  productDispatch({
                    type: SORT_BY,
                    payload: { value: "HIGH_TO_LOW" },
                  })
                }/>
            <label for="hightolow">Price - High to Low</label><br/>
        </div>
    </aside>

    );
};


export {Filters};