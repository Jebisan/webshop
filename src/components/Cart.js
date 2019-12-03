import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {data, columns} from './data'
import WebSocket from './WebSocket'



class Cart extends Component {

  
render() { 
  return(
  <div>
   <ReactTable
   showPagination={false}
   defaultPageSize={data.length}
    data={data}
    columns={columns}
  />
  <button onClick={() => console.log("Printer...")}>Print kviterring!</button>
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


