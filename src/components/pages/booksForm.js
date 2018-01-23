import React from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {postBooks} from '../../actions/booksActions';


import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BooksForm extends React.Component{

   handleSubmit(){
      const book = [{
         title: findDOMNode(this.refs.title).value,
         description: findDOMNode(this.refs.description).value,
         price: findDOMNode(this.refs.price).value       
      }]
      this.props.postBooks(book);
   }

   render(){
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
         </Well>
      );
   }
}
function mapDispatchToProps(dispatch){
   return bindActionCreators({
            postBooks: postBooks
         }, dispatch)
}
export default connect(null, mapDispatchToProps)(BooksForm);