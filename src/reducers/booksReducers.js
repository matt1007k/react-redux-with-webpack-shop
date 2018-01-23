
// define reducers Books
export function booksReducers(state={books:[
   {
      id: 1,
      title: "Crepusculo",
      description: "El libro de vampiros y hombres lobos",
      price: 30
   },
   {
      id: 2,
      title: "Harry Potter",
      description: "El libro de magia y criaturas fantasticas",
      price: 50
   }
]
},action){
   switch(action.type){
      case "GET_BOOKS":
      return {...state, books:[...state.books]}
      break;
      case "POST_BOOK":
      //let books = state.books.concat(action.payload);
      //return books;
      return {books:[...state.books, ...action.payload]}
      break;
      case "DELETE_POST":
      // crear una copia del Array del libros
      const currentBookToDelete = [...state.books]
      // Buscar el libro por el indice y retornar ese libro
      const indexToDelete = currentBookToDelete.findIndex(
         function(book){
            return book.id === action.payload.id;
         }
      )
      // Eliminar el libro por el indice
      return {books: [...currentBookToDelete.slice(0, indexToDelete),
      ...currentBookToDelete.slice(indexToDelete + 1)]}
      break;
      case "UPDATE_POST":
      // crear una copia del Array del libros
      const currentBookToUpdate = [...state.books]
      // Buscar el libro por el indice y retornar ese libro
      const indexToUpdate = currentBookToUpdate.findIndex(
         function(book){
            return book.id === action.payload.id;
         }
      )
      // actualizar el libro con el index recivido y cambiar el valor
      const newBookToUpdate = {
         ...currentBookToUpdate[indexToUpdate],
         title: action.payload.title,
         description: action.payload.description,
         precio: action.payload.price
      } 
      // Mostramos en consola el libro actualizado
      console.log("El nuevo libro es", newBookToUpdate);
      // Retornamos el nuevo libro actializado
      return {books:[...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
      ...currentBookToUpdate.slice(indexToUpdate+ 1)]}
      break;
      default:
      return state;
   }
  
}