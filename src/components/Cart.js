import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {columns} from './data'
import axios from 'axios'
import {NavLink} from 'react-router-dom';





class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0,
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
  
  <NavLink 
                to="/" 
                activeClassName="is-active"
                className="backButton"
                disabled={this.props.cart.length > 0 ?false: true}
                >
                  BACK
                  </NavLink>
  <button className="backButton" onClick={() => this.props.history.push("/")}>Back</button>
  <button className="payButton" onClick={this.print}>Betal</button>




  
  <h3 className = "totalAmount" >Total: {this.props.amount.toFixed(2)} DKK</h3>
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
      cart: state.cartItems,
      amount: state.cartInfo
}
};

export default connect(mapStateToProps)(Cart);


