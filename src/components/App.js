import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import QuickView from "./QuickView";
import "../scss/style.scss";
import { connect } from 'react-redux';
import {startUpdateCart} from '../actions/cardItems';
import {startUpdateAmount} from '../actions/cardInfo';
import {startUpdateProducts} from '../actions/products'
import Select from 'react-select'


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false,
      selectedOption: 8,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

componentDidMount(){
  if(this.props.products.length===0){
    this.getProducts();
  } else {
    this.setState({
      products: this.props.products
    });  }
   

   if(this.state.cart.length===0) {
      this.sumTotalAmount(this.props.cart)
    }
   }

  // Fetch Initial Set of Products from external API
  getProducts(number=8) {
    console.log("Getting products..")
    axios.get(
      "http://127.0.0.1:44358/api/product?link=https://www.babysam.dk/feeds/googleshopping.xml&start=0&amount="+number
      ).then(response => {
      this.setState({
        products: response.data.result
      });
      this.props.startUpdateProducts(response.data.result)
    })
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
  }
  // Add to Cart
  handleAddToCart = (selectedProducts) => {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    this.props.startUpdateCart(this.state.cart)
  }
  
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);

    e.preventDefault();
    
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  
  sumTotalAmount(cart) {
    let total = 0;

    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
      this.setState({totalAmount:total})
      this.props.startUpdateAmount(total)

      return total
  }


  //Reset Quantity
  updateQuantity(qty) {
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }


  handleNumberOfProductsChange = selectedOption => {
    let number = selectedOption.value
    this.setState({products:[]})
    this.getProducts(number)
  };

  render() {
    const { selectedOption } = this.state;
    const options = [
      { value: '8', label: '8' },
      { value: '16', label: '16' },
      { value: '32', label: '32' },
      { value: '64', label: '64' },
      { value: '128', label: '128' }
    ]
    return (
      <div className="container">

     <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cart={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
          history = {this.props.history}
        /> 
        
        <Select className = "select-wrapper"
        placeholder="Antal"
        value={selectedOption}
        onChange={this.handleNumberOfProductsChange}
        options={options}
      />
       

        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />

     

    {/*    <button onClick={() => console.log(this.props.state)} >LOG REDUX</button>*/}

        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startUpdateCart: (cart) => dispatch(startUpdateCart(cart)),
  startUpdateAmount: (amount) => dispatch(startUpdateAmount(amount)),
  startUpdateProducts: (products) => dispatch(startUpdateProducts(products))
});

const mapStateToProps = state => {
  return {
      cart: state.cartItems,
      amount: state.amount,
      products: state.products,
      state: state
}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
