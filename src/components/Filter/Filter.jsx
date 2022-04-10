import "./Filter.css";

const Filter = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4 className="h4 mgb-16">Filters</h4>
        <span className="gray clear">clear</span>
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
          value={500}
          min="100"
          max="1000"
          className="input-slider"
        />
      </div>
      <div className="categories mgb-16">
        <h4 className="h4 fw-600 mgb-16">Categories</h4>
        <div className="category">
          <input type="checkbox" className="input-checkbox" id="all-check" />
          <label htmlFor="all-check">All</label>
        </div>
        <div className="category">
          <input
            type="checkbox"
            className="input-checkbox"
            id="fiction-check"
          />
          <label htmlFor="fiction-check">Fiction</label>
        </div>
        <div className="category">
          <input
            type="checkbox"
            className="input-checkbox"
            id="nonfiction-check"
          />
          <label htmlFor="nonfiction-check">Non-fiction</label>
        </div>
        <div className="category">
          <input
            type="checkbox"
            className="input-checkbox"
            id="fantasy-check"
          />
          <label htmlFor="fantasy-check">Fantasy</label>
        </div>
        <div className="category">
          <input type="checkbox" className="input-checkbox" id="self-check" />
          <label htmlFor="self-check">Self help</label>
        </div>
      </div>
      <div className="ratings mgb-16">
        <h4 className="h4 fw-600 mgb-16">Ratings</h4>
        <div className="rating">
          <input type="radio" className="input-radio" id="fourplus-rating" />
          <label htmlFor="fourplus-rating">4 stars & above</label>
        </div>
        <div className="rating">
          <input type="radio" className="input-radio" id="threeplus-rating" />
          <label htmlFor="threeplus-rating">3 stars & above</label>
        </div>
        <div className="rating">
          <input type="radio" className="input-radio" id="twoplus-rating" />
          <label htmlFor="twoplus-rating">2 stars & above</label>
        </div>
        <div className="rating">
          <input type="radio" className="input-radio" id="oneplus-rating" />
          <label htmlFor="oneplus-rating">1 stars & above</label>
        </div>
      </div>
      <div className="sortby">
        <h4 className="h4 fw-600 mgb-16">Sort by</h4>
        <div className="sort">
          <input type="radio" className="input-radio" id="sort-tb" />
          <label htmlFor="sort-tb">Price- low to high</label>
        </div>
        <div className="sort">
          <input type="radio" className="input-radio" id="sort-tb" />
          <label htmlFor="sort-tb">Price - high to low</label>
        </div>
      </div>
    </div>
  );
};
export { Filter };
