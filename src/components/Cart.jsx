import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>

        <button type="button">
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      <p>Total Items: {totalItems}</p>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <h3>
          Total Amount: ${totalAmount.toFixed(2)}
        </h3>

        <button type="button">
          Checkout
        </button>

        <button type="button">
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default Cart
