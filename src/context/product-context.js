import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";

import { initialProductData, productReducer } from "../reducer/productReducer";
import { INITIAL_ACTIONS } from "../utils";
import { getFilteredData } from "../utils";

export const defaultProductState = {
  products: [],
  priceRange: 1000,
  categories: [],
  rating: "",
  sortBy: "",
  cart: [],
  wishlist: [],
};
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    defaultProductState
  );
  useEffect(() => {
    return (async () => {
      try {
        const { data } = await axios.get("/api/products");

        productDispatch({
          type: INITIAL_ACTIONS.INITIALIZE_PRODUCTS,
          payload: { initialProducts: data.products },
        });
      } catch (error) {
        console.error("Couldn't fetch product data");
      }
    })();
  }, []);
  useEffect(() => {
    return (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        productDispatch({
          type: INITIAL_ACTIONS.INITIALIZE_CATEGORIES,
          payload: { productCategories: data.categories },
        });
      } catch (error) {
        console.error("Couldn't fetch product categories", error);
      }
    })();
  }, []);
  const filteredProductData = getFilteredData(productState, initialProductData);
  return (
    <ProductContext.Provider
      value={{ ...productState, productDispatch, filteredProductData }}
    >
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => {
  return useContext(ProductContext);
};
export { useProduct, ProductProvider };
