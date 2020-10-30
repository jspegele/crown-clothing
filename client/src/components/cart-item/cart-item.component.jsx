import React from 'react'
import { CartItemContainer, CartImageContainer, ItemDetailsContainer } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
  return (
    <CartItemContainer>
      <CartImageContainer src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}
 
export default CartItem
