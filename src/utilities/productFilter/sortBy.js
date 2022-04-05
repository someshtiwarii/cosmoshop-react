const getSortedProducts = (sortBy, products) => {
    if (sortBy === "HIGH_TO_LOW") {
      return [...products].sort(
        (a, b) => b.discountPrice - a.discountPrice
      );
    }
    if (sortBy === "LOW_TO_HIGH") {
      return [...products].sort(
        (a, b) => a.discountPrice - b.discountPrice
      );
    }
  
    return products;
  };
  
  export { getSortedProducts };