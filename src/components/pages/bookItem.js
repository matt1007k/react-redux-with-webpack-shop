import React from 'react';
import {Well, Row, Col, Button} from 'react-bootstrap';


export default class BookItem extends React.Component{
   render(){
      return(
         <Well>
            <Row>
               <Col xs={12} >
                  <h4>{this.props.title } </h4>
                  <p>{this.props.description} </p>
                  <h4>usd. {this.props.price} </h4>
                  <Button bsStyle='primary' >Buy now</Button>
               </Col>
            </Row>            
         </Well>                  
      );
   }
}
