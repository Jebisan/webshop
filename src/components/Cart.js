import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {columns} from './data'
import axios from 'axios'



class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj:{
        data : []
      }
    
    };
  }

  print = () => {
    console.log("Printing..")

      this.props.cart.forEach(product => {
        this.state.obj.data.push(
          {
            "Quantity": product.quantity,
            "Product": {
              "EAN": product.id,
              "Product":product.name,
              "Price": product.price
            }
          }
        )
      });
    

    console.log(this.state.data)

    axios.post('http://127.0.0.1:44358/api/Receipt/Add', this.state.obj)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  
render() { 
  return(
  <div>
   <ReactTable
   showPagination={false}
   defaultPageSize={this.props.cart.length}
    data={this.props.cart}
    columns={columns}
  />
  <button onClick={this.print}>Betal</button>
  </div>
  )
}

}

const mapStateToProps = state => {
  return {
      cart: state.cartItems
}
};

export default connect(mapStateToProps)(Cart);


