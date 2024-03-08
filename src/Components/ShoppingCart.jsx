// Section 2
const ShoppingCart = ({ cart }) => {

// Calculate total price
const calculateTotal = (cart) => {
  return cart.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);
};

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((cartItem) => (
        <div className='cartItem' key={cartItem.product.id}>
          <p>{cartItem.quantity} x {cartItem.product.title}</p>
          <p>€{(cartItem.product.price * cartItem.quantity).toFixed(2)}</p>
        </div>
      ))}
      <p>Total Price: €{calculateTotal(cart).toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;