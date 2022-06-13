import "./ProductListing.css";
import { Filter, Card } from "../../components";
import { useProduct} from "../../context";
import { ToastContainer } from "react-toastify";
const ProductListing = () => {
  const { filteredProductData } = useProduct();
  return (
    <div className="product-page">
      <div className="col1 active">{<Filter />}</div>
      <div className="col2">
        <ul className="list">
          {filteredProductData.map((item) => (
            <li className="list-item" key={item._id}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
};
export { ProductListing };
