import React from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {postBooks, deleteBooks} from '../../actions/booksActions';


import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import bookItem from './bookItem';

class BooksForm extends React.Component{

   handleSubmit(){
      const book = [{
         title: findDOMNode(this.refs.title).value,
         description: findDOMNode(this.refs.description).value,
         price: findDOMNode(this.refs.price).value       
      }]
      this.props.postBooks(book);
   }
   onDelete(){
      let bookId = findDOMNode(this.refs.delete).value;

      this.props.deleteBooks(bookId);
   }
   render(){
      const booksList = this.props.books.map((bookItem) =>{
         return (
            <option key={bookItem.id} value={bookItem.id}>{bookItem.id}</option>            
         )
      })
      return(
         <Well>
            <Panel>
               <FormGroup controlId="title" >
                  <ControlLabel>Título</ControlLabel>
                  <FormControl 
                     type="text"
                     placeholder="Ingrese el título"
                     ref="title"
                  />
               </FormGroup>
               <FormGroup controlId="description" >
                  <ControlLabel>Descripción</ControlLabel>
                  <FormControl 
                     type="text"
                     placeholder="Ingrese la descripción"
                     ref="description"
                  />
               </FormGroup>
               <FormGroup controlId="price" >
                  <ControlLabel>Precio</ControlLabel>
                  <FormControl 
                     type="number"
                     placeholder="Ingrese el precio"
                     ref="price"
                  />
               </FormGroup>
               <Button bsStyle="success" onClick={this.handleSubmit.bind(this)} >Guardar</Button>
            </Panel>
            <Panel style={{marginTop:"25px"}} >
               <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Seleccionar id de producto a eliminar</ControlLabel>
                  <FormControl ref="delete" componentClass="select" placeholder="select">
                     <option value="select">Seleccionar</option>
                     {booksList}                  
                  </FormControl>
               </FormGroup>
               <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Eliminar Producto</Button>
            </Panel>
         </Well>
      );
   }
}

function mapStateToProps(state){
   return{
      books: state.books.books
   }
}
function mapDispatchToProps(dispatch){
   return bindActionCreators({
            postBooks,
            deleteBooks
         }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);