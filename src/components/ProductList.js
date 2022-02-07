import React, { useContext } from 'react'
import ContextCart from '../Context'
import { ADD_SUCCESS } from '../constants/constants'

import { Button, Header, Table, Icon } from 'semantic-ui-react'

const ProductList = () => {
  const { state, dispatch} = useContext(ContextCart)
  console.log('state', state)
  let itemState = state
  const renderProducts = () => {
    if (itemState) {
      return state.info.map((products, index) => {
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
                color="green"
                onClick={() => {
                   dispatch ({type: ADD_SUCCESS, payload: products}) 
                   state.info.splice(index, 1)  
                }}
              >
                {' '}
                <Icon name="add" />  
              </Button>
            </Table.Cell>
          </Table.Row>
        )
      })
    }
  }

  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderProducts()}</Table.Body>
      </Table>
    </div>
  )
}
export default ProductList
