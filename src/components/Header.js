import React, { Component } from "react";
import CartScrollBar from "./CartScrollBar";
import EmptyCart from "../empty-states/EmptyCart";
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
     // cart: this.props.cartItems,
      mobileSearch: false
    };
  }
  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleMobileSearch(e) {
    e.preventDefault();
    this.setState({
      mobileSearch: true
    });
  }
  handleSearchNav(e) {
    e.preventDefault();
    this.setState(
      {
        mobileSearch: false
      },
      function() {
        this.refs.searchBox.value = "";
        this.props.handleMobileSearch();
      }
    );
  } 

  navigateToCart = () => {
    
  }

  render() {
    let cartItems;
    cartItems = this.props.cart.map(product => {
      return (
        
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {product.quantity} {product.quantity > 1 ? "stk." : "stk."}{" "}
            </p>
            <p className="amount">{parseFloat(product.quantity * product.price).toFixed(2)} DKK</p>
          </div>
          <a
            className="product-remove"
            href="#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >x
          </a>
        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (cartItems
      );
    }
    return (
      <header>
        <div className="container">
          <div className="brand">
            <img
              className="logo"
              src="https://tryg.dk/sites/default/files/2018-11/babysam.png"
              alt="Babysam Logo"
            />
          </div>

          <div className="search">
            <a
              className="mobile-search"
              href="#"
              onClick={this.handleMobileSearch.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                alt="search"
              />
            </a>
            <form
              action="#"
              method="get"
              className={
                this.state.mobileSearch ? "search-form active" : "search-form"
              }
            >
              <a
                className="back-button"
                href="#"
                onClick={this.handleSearchNav.bind(this)}
              >
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                  alt="back"
                />
              </a>
              <input
                type="search"
                ref="searchBox"
                placeholder="Søg.."
                className="search-keyword"
                onChange={this.props.handleSearch}
              />
              <button
                className="search-button"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              />
            </form>
          </div>
          <div className="cart">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>Antal varer</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.cart.length}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td>:</td>
                    <td>
                      <strong>{(this.props.total).toFixed(2)} DKK</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              className="cart-icon"
              href="#"
              onClick={this.handleCart.bind(this)}
              ref="cartButton"
            >
              <img
                className={this.props.cartBounce ? "tada" : " "}
                src="http://dj-resound.com/bag.png"
                alt="Cart"
              />
              {this.props.cart.length ? (
                <span className="cart-count">{this.props.cart.length}</span>
              ) : (
                ""
              )}
            </a>
            <div
              className={
                this.state.showCart ? "cart-preview active" : "cart-preview"
              }
              ref="cartPreview"
            >
            <CartScrollBar>{view}</CartScrollBar>
              <div className="action-block">
                <button
                onClick={() => this.props.history.push('/cart')}
                  type="button"
                  className={this.props.cart.length > 0 ? " " : "disabled"}
                  disabled={this.props.cart.length > 0 ?false: true}
                >
                  FORTSÆT TIL CHECKOUT
                </button>
                </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
      cart: state.cartItems,
      redux: state,
    //  amount: state.cartInfo
}
};

export default connect(mapStateToProps)(Header);