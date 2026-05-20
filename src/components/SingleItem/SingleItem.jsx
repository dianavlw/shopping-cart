import { useDispatch } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";

function SingleItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default SingleItem;
