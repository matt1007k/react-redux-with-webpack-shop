import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart} from '../../actions/cartActions';

import {Modal, Col, Row, Well, Panel, Button, ButtonGroup, Label} from 'react-bootstrap';

class Cart extends React.Component{
   constructor(props){
      super(props);

      this.state = {
         showModal: false
      }
   }


   close(){
      this.setState({showModal: false})
   }
   open(){
      this.setState({showModal: !this.state.showModal})
   }

   onDelete(id){
      // crear una copia del Array del carrito
      const currentBookToDelete = this.props.cart;
      // Buscar el libro por el indice y retornar ese item del carrito
      const indexToDelete = currentBookToDelete.findIndex(
         function(cart){
            return cart.id === id;
         }
      )
      // Eliminar el item por el indice
      let cartAfterDelete =  [...currentBookToDelete.slice(0, indexToDelete),
      ...currentBookToDelete.slice(indexToDelete + 1)]

      this.props.deleteCartItem(cartAfterDelete);
   }
   onIncrement(id){
      this.props.updateCart(id, 1);
   }
   onDecrement(id, quantity){
      if(quantity > 1){
         this.props.updateCart(id, -1); 
      }     
   }
   render(){
      if(this.props.cart[0]){
         return this.renderCart();
      }else{
         return this.emptyCart();
      }
   }
   emptyCart(){
      return(<div></div>);
   }
   renderCart(){
      const cartItemsList = this.props.cart.map((itemCart) => {
         return(
            <Panel key={itemCart.id} >
               <Row>
                  <Col  xs={12} sm={2} >
                     <h5>{itemCart.title} </h5><span>    </span>
                  </Col>
                  <Col  xs={12} sm={4} >
                     <h5>usd. {itemCart.price} </h5>
                  </Col>
                  <Col  xs={12} sm={2} >
                     <h5>qty. <Label bsStyle="success">{itemCart.quantity} </Label> </h5>
                  </Col>
                  <Col  xs={6} sm={4} >
                     <ButtonGroup bsStyle={{minWidth:'300px'}} >
                        <Button bsStyle="default" bsSize="small" onClick={this.onDecrement.bind(this, itemCart.id, itemCart.quantity)}>-</Button>
                        <Button bsStyle="default" bsSize="small" onClick={this.onIncrement.bind(this, itemCart.id)} >+</Button>
                        <span>    </span>   
                        <Button onClick={this.onDelete.bind(this, itemCart.id)} bsStyle="danger" bsSize="small">Eliminar</Button>                                             
                     </ButtonGroup>
                  </Col>
               </Row>
            </Panel>
         )
      }, this)
      return(
         
         <div>
            <Panel bsStyle="primary">
               <Panel.Heading>Cart</Panel.Heading>
               <Panel.Body>
                  {cartItemsList}
                  <Row>
                     <Col xs={12} >
                        <h4>Total por pagar: {this.props.totalAmount}</h4>
                        <Button bsStyle="success" bsSize="small" onClick={this.open.bind(this)} >
                           PROCESAR PAGO
                        </Button>
                     </Col>
                  </Row>
                  <Modal show={this.state.showModal} onHide={this.close.bind(this)} >
                     <Modal.Header closeButton>
                        <Modal.Title>PROCESANDO PAGO</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                        <h2>Gracias por comprar en ShopMatt</h2>
                        <p>Recibiras un email de confirmación....</p>
                     </Modal.Body>
                     <Modal.Footer>
                        <Row>
                           <Col xs={6}>
                              Total $: {this.props.totalAmount}
                           </Col>
                        </Row>
                        <Button onClick={this.close.bind(this)} >Close</Button>
                     </Modal.Footer>
                  </Modal>
               </Panel.Body>
            </Panel>           
         </div>
         
      );
   }

}
function mapStateToProps(state){
   return{
      cart: state.cart.cart,
      totalAmount: state.cart.totalAmount
   }
}
function mapDispatchToProps(dispatch){
   return bindActionCreators({
      deleteCartItem,
      updateCart
   }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
