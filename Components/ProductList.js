import Product from './Product.js';


import React, { Component } from 'react';

class ProductList extends Component {
  
    render() {
        return (
            <div>
                <div className="row row-gap-4">
                <h1>Hoodies</h1>
                {
                this.props.Inventory
                .filter(item => item.category === "top")
                .map((item, index) => (
                    <Product
                    key={item.id}
                    itemPic={item.image}
                    itemName={item.item}
                    itemPrice={item.price}
                    itemQuantity={item.quantity}
                    increaseQuantity={() => this.props.increaseQuantity(item.id)}
                    decreaseQuantity={() => this.props.decreaseQuantity(item.id)}
                    addToCart={() => this.props.addToCart(item)}
                    />
                ))
                }
            </div>
            <div className="row row-gap-4">
                <h1>Pants</h1>
                {
                this.props.Inventory
                .filter(item => item.category === "pants")
                .map((item, index) => (
                    <Product
                    key={item.id}
                    itemPic={item.image}
                    itemName={item.item}
                    itemPrice={item.price}
                    itemQuantity={item.quantity}
                    increaseQuantity={() => this.props.increaseQuantity(item.id)}
                    decreaseQuantity={() => this.props.decreaseQuantity(item.id)}
                    addToCart={() => this.props.addToCart(item)}
                    />
                ))
                }
            </div>
          </div>

        );
    }
}

export default ProductList;