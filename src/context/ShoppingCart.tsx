import {useContext,createContext, ReactNode} from 'react';

const ShoppingCartContext=createContext({});

type ShoppingCartProps={
   children:ReactNode,
}

const ShoppingCartProvider=({children}:ShoppingCartProps)=>{
   return (
      <ShoppingCartContext.Provider 
         value={{

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