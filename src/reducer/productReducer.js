import { INITIAL_ACTIONS, FILTER_ACTIONS } from "../utils";
import { defaultProductState } from "../context/product-context";
export let initialProductData = [];
let initialCategoryData = {};
const productReducer = (productState, action) => {
  switch (action.type) {
    case INITIAL_ACTIONS.INITIALIZE_PRODUCTS:
      initialProductData = action.payload.initialProducts;
      return { ...productState, products: action.payload.initialProducts };
    case INITIAL_ACTIONS.INITIALIZE_CATEGORIES:
      initialCategoryData = action.payload.productCategories.reduce(
        (catObj, catItem) => ({
          ...catObj,
          [catItem.categoryName]: false,
        }),
        {}
      );
      return { ...productState, categories: initialCategoryData };
    case FILTER_ACTIONS.PRICE_RANGE:
      return {
        ...productState,
        priceRange: action.payload.priceRangeValue,
      };
    case FILTER_ACTIONS.CHANGE_CATEGORY:
      let categoryValue = action.payload.category;
      let toggleCategoryValue = {
        ...productState.categories,
        [categoryValue]: !productState.categories[categoryValue],
      };
      return {
        ...productState,
        categories: toggleCategoryValue,
      };
    case FILTER_ACTIONS.RATING:
      return {
        ...productState,
        rating: action.payload.ratingValue,
      };
    case FILTER_ACTIONS.LOW_TO_HIGH:
      return { ...productState, sortBy: FILTER_ACTIONS.LOW_TO_HIGH };
    case FILTER_ACTIONS.HIGH_TO_LOW:
      return { ...productState, sortBy: FILTER_ACTIONS.HIGH_TO_LOW };
    case FILTER_ACTIONS.CLEAR_ALL:
      return {
        ...defaultProductState,
        products: initialProductData,
        categories: initialCategoryData,
      };
    default:
      return productState;
  }
};
export { productReducer };
