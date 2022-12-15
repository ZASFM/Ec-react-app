import {useContext,createContext, ReactNode ,useState} from 'react';
import ShoppingCart from '../components/ShoppingCart';

type ShoppingCartProps={
   children:ReactNode,
}

type ShoppingCartContext={
   openCart:()=>void,
   closeCart:()=>void,
   getItemQuantity:(id:number)=>number,
   increaseItemQuantity:(id:number)=>void,
   decreaseItemQuantity:(id:number)=>void,
   removeFromCart:(id:number)=>void,
   cartQuantity:number,
   cartItems:CartItem[];
}

type CartItem={
   id:number,
   quantity:number,
}

const ShoppingCartContext=createContext({} as ShoppingCartContext);

const ShoppingCartProvider=({children}:ShoppingCartProps)=>{
   const [cartItems,setCartItems]=useState<CartItem[]>([]);
   const [isOpen,setIsOpen]=useState(false);

   const getItemQuantity=(id:number)=>{
      return cartItems.find(item=>item.id===id)?.quantity || 0;
   }

   const increaseItemQuantity=(id:number)=>{
      setCartItems(preVal=>{
         if(preVal.find(item=>item.id==id)==null){
            return [...preVal,{id,quantity:1}]
         }else{
            return preVal.map(item=>{
               if(item.id===id){
                  return {...item,quantity:item.quantity+1}
               }else{
                  return item;
               }
            })
         }
      })
   }

   const decreaseItemQuantity=(id:number)=>{
      setCartItems(preVal=>{
         if(preVal.find(item=>item.id===id)?.quantity===1){
            return preVal.filter(item=>item.id!==id);
         }else{
            return preVal.map(item=>{
               if(item.id===id){
                  return {...item,quantity:item.quantity-1}
               }else{
                  return item;
               }
            })
         }
      })
   }

   const removeFromCart=(id:number)=>{
      setCartItems(preVal=>{
         return preVal.filter(item=>item.id!==id);
      })
   }

   const cartQuantity=cartItems.reduce((quantity,item)=>item.quantity+quantity,0);

   const openCart=()=>setIsOpen(true);

   const closeCart=()=>setIsOpen(false);

   return (
      <ShoppingCartContext.Provider 
         value={{
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart,
         }}
      >
         {children}
         <ShoppingCart isOpen={isOpen}/>
      </ShoppingCartContext.Provider>
   )
}

export const useShoppingProvider=()=>{
   return useContext(ShoppingCartContext);
}

export {ShoppingCartContext,ShoppingCartProvider};