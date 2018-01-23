import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';

import {Grid, Row, Col, Button} from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';


 class BooksList extends React.Component{
   constructor(props){
      super(props);
   }

   componentDidMount(){
      this.props.getBooks([
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
      ]);
   }

   loadBooks(){
      return this.props.books.map((book) => {
         return(
            <Col xs={12} sm={6} md={4} key={book.id}>
               <BookItem 
                  id={book.id}
                  title={book.title}
                  description={book.description}
                  price={book.price}
               />
            </Col>            
         );
      })
   }

   render(){
      //console.log("ListBooks", this.props.books);
      return(
         <Grid>
            <Row>
              <Cart></Cart>
            </Row>           
            <Row style={{marginTop:"15px"}} >               
               {this.loadBooks()}
               <Col xs={12} sm={6} >
                  <BooksForm />
               </Col>
            </Row>
         </Grid>
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
      getBooks: getBooks
   }, dispatch)   
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);