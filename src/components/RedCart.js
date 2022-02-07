import React, { useContext } from 'react'
import Context from '../Context'
import { REMOVE_SUCCESS } from '../constants/constants'

import { Button, Header, Table, Icon } from 'semantic-ui-react'

const RedCart = () => {
  const { state, dispatch} = useContext(Context)

  console.log("cart:",state.cart);
 
  const renderCart = () => {
    return state.cart.map((products, index) => {
      return (
        <Table.Row key={index} products={products}>
          <Table.Cell>
            <Header textAlign="left">
              <Header.Subheader>{products.title}</Header.Subheader>
            </Header>
          </Table.Cell>
          <Table.Cell textAlign="right">{products.price}</Table.Cell>
          <Table.Cell textAlign="right">
            <Button
              color="red"
              onClick={() => {
                dispatch({type: REMOVE_SUCCESS, payload: products}) 
                state.cart.splice(index, 1)
              }}

            >
              <Icon name="remove" />
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
            <Table.HeaderCell textAlign="right"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
       <Table.Body>{renderCart()}</Table.Body>
      </Table>
    </div>
  )
}
export default RedCart
