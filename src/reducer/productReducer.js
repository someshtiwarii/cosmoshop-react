import { filterType } from "../constant/filterType";

const initialProducts = {
  products: [],
  category: [],
  sortBy: null,
  priceRange: 100000,
  rating: null,
  categories: {
    men: false,
    women: false,
    kids: false,
    electronics: false,
    skincare: false,
  },
};

const {
  DISPLAY_PRODUCTS,
  CLEAR_FILTERS,
  CATEGORY,
  PRICE_RANGE,
  SORT_BY,
  RATING,
} = filterType;

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: payload.data };
    case CLEAR_FILTERS:
        return {
          ...initialProducts,
          products: payload.data,
        };
    case CATEGORY:
      if (state.category.includes(payload.value))
        return {
          ...state,
          category: [...state.category].filter(
            (category) => category !== payload.value
          ),
        };
      return { ...state, category: [...state.category, payload.value] };
    case PRICE_RANGE:
        return { ...state, priceRange: payload.value };
    case SORT_BY:
      return { ...state, sortBy: payload.value };
    case RATING:
      return { ...state, rating: payload.rating };
    default:
      return state;
  }
};

export { productReducer, initialProducts };