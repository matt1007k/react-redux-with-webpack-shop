// ADD TO CART
export function addToCart(cart){
   return{
      type: "ADD_TO_CART",
      payload: cart
   }
}
// UPDATE CART
export function updateCart(id, unit){
   return{
      type: "UPDATE_CART",
      id: id,
      unit: unit
   }
}
// DELETE FROM CART
export function deleteCartItem(cart){
   return{
      type: "DELETE_CART_ITEM",
      payload: cart
   }
}