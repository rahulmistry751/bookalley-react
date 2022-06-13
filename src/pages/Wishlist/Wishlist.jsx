import "./Wishlist.css";
import { WishlistProduct } from "./component/WishlistProduct";
import { useProduct} from "../../context";
import { ToastContainer } from "react-toastify";
const Wishlist = () => {
  const { wishlist } = useProduct();
  return (
    <section className="wishlist-section">
      <div className="wishlist-heading">
        <h4 className="h3 fw-600">My Wishlist</h4>
      </div>
      {wishlist.length ? (
        <div className="wishlist-list">
          <ul className="list">
            {wishlist.map((item) => (
              <li className="list-item" key={item._id}>
                <WishlistProduct item={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="h3 txt-c">There is no book stack in your wishlist</div>
      )}
      <ToastContainer autoClose={1000}/>
    </section>
  );
};
export { Wishlist };
