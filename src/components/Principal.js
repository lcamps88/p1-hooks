import React, { useReducer } from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'
import data from '../data/data'
import CartContext from '../Context'
import ProductList from '../components/ProductList'
import RedCart from '../components/RedCart'
import { Reduces} from '../reducers/useReducer'


const Principal = () => {
  let initialState = { info: data, cart: [] }
  //const [state, dispatch] = useReducer(reducer, initialState)

  const [state, dispatch] = useReducer(Reduces, initialState)

  return (
    <div>
      <br></br>
      <Header as="h1" color="red">
        <Icon name="cart" />
        CART LIST
      </Header>

      <Segment.Group horizontal>
        <CartContext.Provider value={{ state, dispatch }}>
          <Segment>
            <ProductList />
          </Segment>

       
          <Segment>
            <RedCart />
          </Segment>
        </CartContext.Provider>
      </Segment.Group>
    </div>
  )
}

export default Principal
