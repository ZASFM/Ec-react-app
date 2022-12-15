import React from "react";
import {Card,Button} from 'react-bootstrap';
import {formatCurrency} from '../utills/formatCurrency';
import { useShoppingProvider } from "../context/ShoppingCart";

type StoreItemProps={
   id:number,
   name:string,
   price:number,
   imgUrl:string,
}

const StoreItem=({id,name,price,imgUrl}:StoreItemProps)=>{
   const {getItemQuantity,increaseItemQuantity,decreaseItemQuantity,removeFromCart}=useShoppingProvider();
   const quantity=getItemQuantity(id);
   return (
      <Card className="h-100">
         <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit:"cover"}}/>
         <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
               <span className="fs-2">{name}</span>
               <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
               {
                  quantity===0?
                  <Button className="w-100" onClick={()=>increaseItemQuantity(id)}>+ Add</Button>:
                  <div className="d-flex align-items-center flex-column" style={{gap:"0.5rem"}}>
                     <div className="d-flex align-items-center justify-content-center" style={{gap:"0.5rem"}}>
                        <Button onClick={()=>increaseItemQuantity(id)}>+</Button>
                        <div className="fs-3">{quantity} <span>in cart</span></div>
                        <Button onClick={()=>decreaseItemQuantity(id)}>-</Button>
                     </div>
                     <Button variant="danger" onClick={()=>removeFromCart(id)}>Remove</Button>
                  </div>
               }
            </div>
         </Card.Body>
      </Card>
   )
}
export default StoreItem;