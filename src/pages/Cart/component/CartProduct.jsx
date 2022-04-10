import "../Cart.css";
const CartProduct = ({ item }) => {
  return (
    <div className="card card-hori">
      <div className="card-image">
        <img src={item.img} alt="" className="card-img" />
      </div>
      <div className="card-content cart-content txt-l">
        <div className="card-header cart-header">
          <h4 className="book-heading h3 fw-600">{item.title}</h4>
          <p className="book-subheading gray">By {item.author}</p>
          <div className="price-rating">
            <div className="price">
              <span className="dis-price">₹{item.discountPrice}</span>
              <span className="real-price">₹{item.originalPrice}</span>
              <div className="percent gray mgt-16">
                {item.discountPercent}% off
              </div>
            </div>
            <div className="rating">
              <i className="fas fa-star star-rating mgt-16"></i>
              {item.rating}
            </div>
            <div className="qty">
              <button className="button button-sm">
                <i className="fas fa-minus"></i>
              </button>
              <input
                type="text"
                value="1"
                className="input-qty txt-c"
                min="1"
                max="50"
              />
              <button className="button button-sm">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer cart-footer">
          <button className="button button-full mgb-16">
            Remove from cart
          </button>
          <button className="button button-outlined button-full">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export { CartProduct };
