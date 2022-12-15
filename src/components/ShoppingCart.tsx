import React from 'react';
import {Offcanvas,Stack} from 'react-bootstrap';
import {useShoppingProvider} from '../context/ShoppingCart';
import { formatCurrency } from '../utills/formatCurrency';
import CartItem from './CartItem';
import storeItems from '../data/items.json';

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
               <div className='ms-auto fw-bold fs-5'>
                  Total {":"}
                  {formatCurrency(
                     cartItems.reduce((total,cartItem)=>{
                        const item=storeItems.find(item=>item.id===cartItem.id);
                        return total+(item?.price||0)*cartItem.quantity;
                     },0)
                  )}
               </div>
            </Stack>
         </Offcanvas.Body>
      </Offcanvas>
   )
}
export default ShoppingCart