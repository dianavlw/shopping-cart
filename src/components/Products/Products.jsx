import data from "../../data";
import SingleItem from "../SingleItem/SingleItem.jsx";

function Products() {
  return (
    <div>
      <h2>Products</h2>

      {data.map((item) => (
        <SingleItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Products;
