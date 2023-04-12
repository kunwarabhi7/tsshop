import {createContext , useContext , ReactNode, useState} from 'react'

type shoppingCartProviderProps = {
    children: ReactNode
}
type shoppingCartContext = {
    getItemQuantity : (id:number) => number,
    increaseCartQuantity : (id:number) => void,
    decreaseCartQuantity : (id:number) => void,
    removeFromCart : (id:number) => void,
 
}

type cartItem ={ 
    id : number,
    quantity : number
}
const shoppingCartContext = createContext({}as shoppingCartContext)

export function useShoppingCart(){
    return useContext(shoppingCartContext)
}


export function ShoppingCartProvider ({children}:shoppingCartProviderProps){
   const [cartItems , setCartItems] = useState<cartItem[]>([])
   
   function getItemQuantity(id:number){
return cartItems.find(item => item.id === id)?.quantity || 0
   }
  
   function increaseCartQuantity() {}
   function decreaseCartQuantity() {}
   function removeFromCart() {}
   return (
    
        

        <shoppingCartContext.Provider value={{getItemQuantity,decreaseCartQuantity,removeFromCart,increaseCartQuantity() {
            
        },}}>
    {children}
</shoppingCartContext.Provider>
    )
}