import ProductProps from '../props/product.props'
import CartItem from '../components/cartItems'
import { WrapperCart } from '../services/App.service'
import { Button } from '@mui/material'

type Props = {
  cartItems: ProductProps[]
  addToCart: (clickedItem: ProductProps) => void
  removeFromCart: (id: number) => void
}

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: ProductProps[]) => items.reduce((acc, item) => acc + item.amount * item.price, 0)

  return (
    <WrapperCart>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <Button sx={{ marginTop: 3, borderRadius: 3 }} variant="contained">
        Buy
      </Button>
    </WrapperCart>
  )
}

export default Cart
