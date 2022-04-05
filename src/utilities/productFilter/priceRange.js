const getPriceRangeProducts = (priceRange, products) => {
    return [...products].filter(
      (product) => Number(product.discountPrice) <= priceRange
    );
  };
  
  export { getPriceRangeProducts };