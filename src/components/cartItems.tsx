import { Button } from '@mui/material'
import ProductProps from '../props/product.props'
import { WrapperCart, WrapperCartItem } from '../services/App.service'

type Props = {
  item: ProductProps
  addToCart: (clickedItem: ProductProps) => void
  removeFromCart: (id: number) => void
}

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
  return (
    <WrapperCartItem>
      <div>
        <h1>{item.title}</h1>
        <div className="information">
          <p>Price: ${item.price}</p>
        </div>
        <div className="buttons">
          <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>
            -
          </Button>
          <p>{item.amount}</p>
          <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
            +
          </Button>
          <br />
          <br />
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
      </div>
    </WrapperCartItem>
  )
}

export default CartItem
