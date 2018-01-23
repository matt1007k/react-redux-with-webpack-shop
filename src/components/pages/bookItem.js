import React from 'react';
import {Well, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart,updateCart} from  '../../actions/cartActions';

class BookItem extends React.Component{
   handleCart(){
      const cart = [...this.props.cart, {
         id: this.props.id,
         title: this.props.title,
         description: this.props.description,
         price: this.props.price,
         quantity: 1 
      }]

      if(this.props.cart.length > 0){
         // El Cart no esta vació
         let id = this.props.id;

         let cartIndex = this.props.cart.findIndex(function(cart){
            return cart.id === id;
         })
         // Si retorno que no hay item con este id
         if(cartIndex === -1){
            this.props.addToCart(cart);            
         }else{
            // Necesitamos actualizar la cantidad
            this.props.updateCart(id, 1);
         }
      }else{
         // El Cart esta vació         
         this.props.addToCart(cart);
      }
      
   }
   render(){
      return(
         <Well>
            <Row>
               <Col xs={12} >
                  <h4>{this.props.title } </h4>
                  <p>{this.props.description} </p>
                  <h4>usd. {this.props.price} </h4>
                  <Button onClick={this.handleCart.bind(this) } bsStyle='primary' >Buy now</Button>
               </Col>
            </Row>            
         </Well>                  
      );
   }
}
function mapStateToProps(state){
   return{
      cart: state.cart.cart
   }
}
function mapDispatchToProps(dispatch){
   return bindActionCreators({
      addToCart,
      updateCart
   },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookItem);