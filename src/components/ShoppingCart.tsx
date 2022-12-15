import React from 'react';
import {Offcanvas,Stack} from 'react-bootstrap';
import {useShoppingProvider} from '../context/ShoppingCart';
import CartItem from './CartItem';

type ShopOpenProps={
   isOpen:boolean,
}

const ShoppingCart=({isOpen}:ShopOpenProps)=>{
   const {closeCart,cartItems}=useShoppingProvider();
   return (
      <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <Stack gap={3}>
               {cartItems.map(item=>{
                  return (
                     <CartItem
                        key={item.id}
                        {...item}
                     />
                  )
               })}
            </Stack>
         </Offcanvas.Body>
      </Offcanvas>
   )
}
export default ShoppingCart