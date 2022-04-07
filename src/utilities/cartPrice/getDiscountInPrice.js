const getDiscountInPrice = (cart) => {
    return cart.reduce((discount, currentItem) => {
      return (discount +=
        (Number(currentItem.price) - Number(currentItem.discountPrice)) *
        Number(currentItem.qty));
    }, 0);
  };
  
  export { getDiscountInPrice };