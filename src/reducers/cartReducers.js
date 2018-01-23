export function cartReducers(state={cart:[]}, action){
   switch(action.type){
      case "ADD_TO_CART":
      return {...state, 
         cart: action.payload,
         totalAmount: totals(action.payload).amount,
         totalQty: totals(action.payload).qty
      }
      break;
      case "UPDATE_CART":
      // crear una copia del Array del libros
      const currentCartToUpdate = [...state.cart]
      // Buscar el libro por el indice y retornar ese libro
      const indexToUpdate = currentCartToUpdate.findIndex(
         function(cart){
            return cart.id === action.id;
         }
      )
      // actualizar el item cart con el index recivido y cambiar el valor de la cantidad 
      const newCartToUpdate = {
         ...currentCartToUpdate[indexToUpdate],         
         quantity: currentCartToUpdate[indexToUpdate].quantity + action.unit
      } 
      
      // Retornamos el nuevo libro actualizado
      let cartUpdate = [...currentCartToUpdate.slice(0, indexToUpdate), newCartToUpdate,
      ...currentCartToUpdate.slice(indexToUpdate + 1)]
      return {...state, 
         cart: cartUpdate,
         totalAmount: totals(cartUpdate).amount,
         totalQty: totals(cartUpdate).qty
      }
      break;
      case "DELETE_CART_ITEM":
      return {...state, 
         cart: action.payload,
         totalAmount: totals(action.payload).amount,
         totalQty: totals(action.payload).qty
      }
      break;
      default:
      return state;
   }
}


// calcular totals
export function totals(payloadArray){
   const totalAmount = payloadArray.map(function(cartArr){
      return cartArr.price * cartArr.quantity;
   }).reduce(function(a, b){
      return a + b;
   }, 0);// empezar sumando del indice 0

   const totalQty = payloadArray.map(function(qty){
      return qty.quantity;
   }).reduce(function(a, b){
      return a + b;
   }, 0);

   return {amount:totalAmount.toFixed(2), qty: totalQty}
}