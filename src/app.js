import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// import redux createStore y applyMiddleware
import { applyMiddleware, createStore } from 'redux';
// Import Logger de Redux
import logger from 'redux-logger';

import reducers from './reducers/index';
// Import Actions
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';



// STEP 1 create to store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';


render(
      <Provider store={store} >    
            <BooksList />
      </Provider>
      , document.getElementById('app')
);

/*/ STEP 2 create and dispatch actions 
store.dispatch(postBooks(
      
   ))


// Other actions CRUD

// Actions DELETE
/*
store.dispatch(deleteBooks(
   {id: 1}
))

// Actions UPDATE
store.dispatch(updateBooks(
   {  
      id: 2,
      title: "Ready One Player",
      description: "El libro futurista y del mundo de realidad virtual",
      precio: 44
   }
))


// Actions Cart

// Actions ADD
store.dispatch(addToCart([{id:1}]))
*/