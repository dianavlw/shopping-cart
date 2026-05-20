import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { cart, totalPrice } = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is Empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ${totalPrice}</h2>
    </div>
  );
}

export default Cart;
