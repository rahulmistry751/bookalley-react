// get filtered data within discountPrice range
const getPriceRange = (initialProductData, value) => {
  return initialProductData.filter(
    (item) => Number(item.discountPrice) <= Number(value)
  );
};
// get filtered categoriezed data
const getCategories = (initialProductData, categories) => {
  const trueCategory = Object.keys(categories).filter(
    (key) => categories[key] === true
  );
  if (trueCategory.length) {
    const categorizedData = initialProductData.filter((item) => {
      if (trueCategory.includes(item.categoryName)) {
        return item;
      }
      return 0;
    });

    return categorizedData;
  }
  return initialProductData;
};
// Get the filtered rated data
const getRatedData = (products, rating) => {
  if (rating) {
    return products.filter((item) => Number(item.rating) >= Number(rating));
  }
  return products;
};
// get filtered sorted data (high-low/low-high)
const getSortedData = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return products.sort((a, b) => b.discountPrice - a.discountPrice);
  } else if (sortBy === "LOW_TO_HIGH") {
    return products.sort((a, b) => a.discountPrice - b.discountPrice);
  } else return products;
};
const getFilteredData = (
  { priceRange, categories, rating, sortBy, products },
  initialProductData
) => {
  const productData = [...products];
  const filteredPriceRange = getPriceRange(productData, priceRange);
  const filteredCategorizedData = getCategories(filteredPriceRange, categories);
  const filteredRatedData = getRatedData(filteredCategorizedData, rating);
  const filteredSortedData = getSortedData(filteredRatedData, sortBy);
  return filteredSortedData;
};
export { getFilteredData };
