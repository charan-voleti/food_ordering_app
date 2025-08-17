import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <tr key={item._id}>
                  <td>
                    <img
                      src={`${url}/images/${item.image}`}
                      alt={item.name}
                      style={{ width: "60px", borderRadius: "8px" }}
                    />
                  </td>

                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>{cartItems[item._id]}</td>
                  <td>₹{item.price * cartItems[item._id]}</td>

                  <td>
                    <button onClick={() => removeFromCart(item._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

    
      <div className="cart-total">
        <h3>Cart Totals</h3>
        <p>Total Amount: ₹{getTotalCartAmount()}</p>
      </div>
    </div>
  );
};

export default Cart;
