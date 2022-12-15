import {useContext,createContext, ReactNode ,useState} from 'react';

type ShoppingCartProps={
   children:ReactNode,
}

type ShoppingCartContext={
   getItemQuantity:(id:number)=>number|null,
   increaseItemQuantity:(id:number)=>void,
   decreaseItemQuantity:(id:number)=>void,
   removeFromCart:(id:number)=>void,
}

type CartItem={
   id:number,
   quantity:number,
}

const ShoppingCartContext=createContext({} as ShoppingCartContext);

const ShoppingCartProvider=({children}:ShoppingCartProps)=>{
   const [cartItems,setCartItems]=useState<CartItem[]>([]);

   const getItemQuantity=(id:number)=>{
      return cartItems.find(item=>item.id===id)?.quantity || null;
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

   return (
      <ShoppingCartContext.Provider 
         value={{
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeFromCart,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   )
}

export const useShoppingProvider=()=>{
   return useContext(ShoppingCartContext);
}

export {ShoppingCartContext,ShoppingCartProvider};