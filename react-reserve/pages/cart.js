import {segment} from 'semantic-ui-react'
import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'


function Cart() {
  return (
    <segment>
      <CartItemList />
      <CartSummary />
    </segment>
  )
}

export default Cart;
