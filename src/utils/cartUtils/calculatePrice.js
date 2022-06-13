const calculatePrice = (cart) => {
  return cart.reduce(
    (acc, curr) => acc + parseFloat(curr.discountPrice * curr.qty),
    0
  );
};

const calculateDiscount = (cart) => {
  return cart.reduce(
    (acc, curr) =>
      acc +
      (parseFloat(curr.originalPrice) - parseFloat(curr.discountPrice)) *
        curr.qty,
    0
  );
};
const calculateTotalPrice = (cart) => {
  return cart.reduce(
    (acc, curr) => acc + parseFloat(curr.discountPrice) * curr.qty,
    0
  );
};
export { calculatePrice, calculateDiscount, calculateTotalPrice };
