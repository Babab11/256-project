import React, { Component } from 'react';
import '../App.css';
import ProductList from './ProductList.js';
import Sidebar from './Sidebar.js';
import Inventory from './Inventory.json'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'


class StorePage extends Component {

  constructor() {
    super();
    this.state = {
      Inventory: Inventory,
      cart: [],
    }
    
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.clearCart = this.clearCart.bind(this);

  }

  clearCart() {
    this.setState({ cart: [] });
  }

  increaseQuantity(id) {
    this.setState(prevState => ({
      Inventory: prevState.Inventory.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }
        return item;
      })
    }));
  }
  
  decreaseQuantity(id) {
    this.setState(prevState => ({
      Inventory: prevState.Inventory.map(item => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
        return item;
      })
    }));
  }

  addToCart(selecteditem) {
    let cartItems = this.state.cart;
    let productID = selecteditem.id;
    let productQty = selecteditem.quantity;
    if (this.checkProduct(productID)) {
      let index = cartItems.findIndex((x => x.id === productID));
      cartItems[index].quantity = Number(cartItems[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItems
      })
    } else {
      cartItems.push(selecteditem);
      this.setState({
        cart: cartItems
      })
    }
  }

  onRemove(indexToRemove) {
    let cart = this.state.cart;
    let index = cart.findIndex((x => x.id === indexToRemove));
    this.state.cart.splice(index, 1);
    this.setState({
      cart: this.state.cart
    })
  }

  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }

  checkOut() {
    this.setState({
      cart: [],
      Inventory: Inventory
    }
    )
  }


  render() {
    return (

      <div>

        <div className="container">

          <br />
          <br />
          <br />

          <div className="row">

            {/* product display */}
            <div className="col">
              <br />
              <ProductList
                Inventory={this.state.Inventory}
                cart={this.state.cart}
                addToCart={this.addToCart}
                increaseQuantity={this.increaseQuantity}
                decreaseQuantity={this.decreaseQuantity}
                onRemove={this.onRemove}
              />

            </div>

            {/* in shop nav widescreen */}
            <div className="col-lg-4">
              <br />
              <Sidebar 
                Inventory={this.state.Inventory}
                increaseQuantity={this.increaseQuantity}
                decreaseQuantity={this.decreaseQuantity}
                />
            </div>
            

          </div>
          
          {/* footer */}
          <div className="container">
            <div className="row">
              <div className="col-md center-content">
                <hr />
                <h4>Made by Denny Smith, Blake Bailey and Karim Koita</h4>
              </div>
            </div>
          </div>

        </div>

      </div>
      
    );
  }
}

export default StorePage