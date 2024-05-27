import React, { Component } from 'react';
import Checkout from './Checkout.js';
import CartDisplay from './CartDisplay.js';

class Sidebar extends Component {

    render() {
        return (
            <div>

                <CartDisplay 
                    Inventory={this.props.Inventory}
                    increaseQuantity={this.props.increaseQuantity}
                    decreaseQuantity={this.props.decreaseQuantity}
                    />
                <Checkout 
                    Inventory={this.props.Inventory}
                    increaseQuantity={this.props.increaseQuantity}
                    decreaseQuantity={this.props.decreaseQuantity}
                />
            </div>
        );
    }
}

export default Sidebar;