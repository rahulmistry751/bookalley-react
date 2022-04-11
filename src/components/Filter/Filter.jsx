import "./Filter.css";
import { useProduct } from "../../context/product-context";
import { FILTER_ACTIONS } from "../../utils";
const ratingList = [4, 3, 2, 1];
const Filter = () => {
  const { categories, priceRange, productDispatch, sortBy, rating } =
    useProduct();
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4 className="h4 mgb-16">Filters</h4>
        <span
          className="gray clear"
          onClick={() =>
            productDispatch({
              type: FILTER_ACTIONS.CLEAR_ALL,
            })
          }
        >
          clear
        </span>
      </div>
      <div className="slider mgb-16">
        <h4 className="h4 fw-600 mgb-16">Price</h4>
        <label className="price-label">
          <span>100</span>
          <span>500</span>
          <span>1000</span>
        </label>
        <input
          type="range"
          value={priceRange}
          title={priceRange}
          min="100"
          max="1000"
          className="input-slider"
          onChange={(e) =>
            productDispatch({
              type: FILTER_ACTIONS.PRICE_RANGE,
              payload: { priceRangeValue: e.target.value },
            })
          }
        />
      </div>
      <div className="categories mgb-16">
        <h4 className="h4 fw-600 mgb-16">Categories</h4>
        {Object.keys(categories).map((categoryName, index) => {
          return (
            <div className="category" key={index}>
              <input
                type="checkbox"
                className="input-checkbox"
                checked={Object.values(categories)[index]}
                id={`${categoryName}-check`}
                onChange={() =>
                  productDispatch({
                    type: FILTER_ACTIONS.CHANGE_CATEGORY,
                    payload: { category: categoryName },
                  })
                }
              />
              <label htmlFor={`${categoryName}-check`}>{categoryName}</label>
            </div>
          );
        })}
      </div>
      <div className="ratings mgb-16">
        <h4 className="h4 fw-600 mgb-16">Ratings</h4>
        {ratingList.map((star, index) => {
          return (
            <div className="rating" key={index}>
              <input
                type="radio"
                className="input-radio"
                id={`${star}plus-check`}
                name="rating"
                checked={star === rating}
                onChange={() =>
                  productDispatch({
                    type: FILTER_ACTIONS.RATING,
                    payload: { ratingValue: star },
                  })
                }
              />
              <label htmlFor={`${star}plus-check`}>{star} stars & above</label>
            </div>
          );
        })}
      </div>
      <div className="sortby">
        <h4 className="h4 fw-600 mgb-16">Sort by</h4>
        <div className="sort">
          <input
            type="radio"
            className="input-radio"
            id="sort-tb"
            name="sort by price"
            checked={sortBy === FILTER_ACTIONS.LOW_TO_HIGH}
            onChange={() =>
              productDispatch({ type: FILTER_ACTIONS.LOW_TO_HIGH })
            }
          />
          <label htmlFor="sort-tb">Price- low to high</label>
        </div>
        <div className="sort">
          <input
            type="radio"
            className="input-radio"
            id="sort-tb"
            name="sort by price"
            checked={sortBy === FILTER_ACTIONS.HIGH_TO_LOW}
            onChange={() =>
              productDispatch({ type: FILTER_ACTIONS.HIGH_TO_LOW })
            }
          />
          <label htmlFor="sort-tb">Price - high to low</label>
        </div>
      </div>
    </div>
  );
};
export { Filter };
