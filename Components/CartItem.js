import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <div className="row w-100">
                <div className="col-3">{this.props.itemName}</div>
                <div className="stepper-input col-3">
                    <span className="decrement btn" onClick={this.props.decreaseQuantity}>-</span>
                    <input className="text-center" value={this.props.itemQuantity} readOnly />
                    <span className="increment btn" onClick={this.props.increaseQuantity}>+</span>
                </div>
                <div className="col-2">${this.props.itemPrice * this.props.itemQuantity}</div>
            </div>
        );
    }
}

export default CartItem;