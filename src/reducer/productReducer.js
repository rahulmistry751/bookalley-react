import { INITIAL_ACTIONS, FILTER_ACTIONS, PRODUCT_ACTIONS, USER_ACTIONS } from "../utils";
import { defaultProductState } from "../context/product-context";
export let initialProductData = [];
let initialCategoryData = {};
let updatedWishlistItems = [];
let updatedCartItems = [];
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
    case PRODUCT_ACTIONS.ADD_TO_WISHLIST:
      if (productState.wishlist.length) {
        updatedWishlistItems = productState.wishlist.map((item) => {
          return item._id === action.payload.product._id
            ? [...productState.wishlist]
            : [...productState.wishlist, { ...action.payload.product }];
        })[0];
      } else {
        updatedWishlistItems = [
          ...productState.wishlist,
          { ...action.payload.product },
        ];
      }
      return {
        ...productState,
        wishlist: updatedWishlistItems,
      };
    case PRODUCT_ACTIONS.REMOVE_FROM_WISHLIST:
      updatedWishlistItems = productState.wishlist.filter(
        (wishItem) => wishItem._id !== action.payload.product._id
      );
      return { ...productState, wishlist: updatedWishlistItems };
    case PRODUCT_ACTIONS.UPDATE_WISHLIST:
      return {...productState,wishlist:action.payload.wishlist}
    case PRODUCT_ACTIONS.ADD_TO_CART:
      if (productState.cart.length) {
        updatedCartItems = productState.cart.map((item) => {
          return item._id === action.payload.product._id
            ? [...productState.cart]
            : [
                ...productState.cart,
                { ...action.payload.product, qty: 1 },
              ];
        })[0];
      } else {
        updatedCartItems = [
          ...productState.cart,
          { ...action.payload.product, qty: 1 },
        ];
      }
      return {
        ...productState,
        cart: updatedCartItems,
      };
    case PRODUCT_ACTIONS.REMOVE_FROM_CART:
      updatedCartItems = productState.cart.filter(
        (cartItem) => cartItem._id !== action.payload.product._id
      );
      return {
        ...productState,
        cart: updatedCartItems,
      };
    case PRODUCT_ACTIONS.INCREASE_QTY:
      updatedCartItems = productState.cart.map((cartItem) =>
        cartItem._id === action.payload.product._id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );
      return {
        ...productState,
        cart: updatedCartItems,
      };
    case PRODUCT_ACTIONS.DECREASE_QTY:
      updatedCartItems = productState.cart.map((cartItem) =>
        cartItem._id === action.payload.product._id
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      );
      return {
        ...productState,
        cart: updatedCartItems,
      };
    case PRODUCT_ACTIONS.UPDATE_CART:
      return {...productState,cart:action.payload.cart}
    case USER_ACTIONS.LOGOUT:
      return {...productState,wishlist:[],cart:[]}
    case USER_ACTIONS.CLEAR_CART:
      return {...productState,cart:[]}
    default:
      return productState;
  }
};
export { productReducer };
