import React from "react";
import {useShoppingProvider} from '../context/ShoppingCart';
import storeItems from '../data/items.json';
import {Button, Stack} from 'react-bootstrap';
import { formatCurrency } from "../utills/formatCurrency";

type CartItemProps={
   id:number,
   quantity:number,
}

const CartItem=({id,quantity}:CartItemProps)=>{
   const {removeFromCart}=useShoppingProvider();
   const item=storeItems.find(item=>item.id===id);
   if(item==null) return null;
   return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
         <img
            src={item.imgUrl}
            style={{width:"125px",height:"75px", objectFit:"cover"}}
         />
         <div className="me-auto">
            <div>
               {item.name} {quantity>1 && <span className="text-muted" style={{fontSize:'0.5rem'}}>x{quantity}</span>}
            </div>
            <div className="text-muted" style={{fontSize:'0.69rem'}}>
            {formatCurrency(item.price)}
            </div>
         </div>
         <div>{formatCurrency(item.price*quantity)}</div>
         <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(id)}>x</Button>
      </Stack>
   )
}

export default CartItem;