import React, { Component } from 'react';
import CartItem from './CartItem';

class CartDisplay extends Component {
    render() {
        const { Inventory, increaseQuantity, decreaseQuantity } = this.props;

        // Filtered inventory with items that have quantity greater than 0
        const filteredInventory = Inventory.filter(item => item.quantity > 0);

        // Calculate total price
        const subtotal = filteredInventory.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);

        // Calculate tax
        const taxRate = 0.06; // 6% tax rate
        const tax = subtotal * taxRate;

        // Calculate total including tax
        const total = subtotal + tax;

        return (
            <div>
                {filteredInventory.map(item => (
                    <div key={item.id}>
                        <CartItem
                            itemPic={item.image}
                            itemName={item.item}
                            itemPrice={item.price}
                            itemQuantity={item.quantity}
                            increaseQuantity={() => increaseQuantity(item.id)}
                            decreaseQuantity={() => decreaseQuantity(item.id)}
                            addToCart={() => this.props.addToCart(item)}
                        />
                    </div>
                ))}
                <div>
                    <hr />
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>Tax (6%): ${tax.toFixed(2)}</p>
                    <p>Total: ${total.toFixed(2)}</p>
                </div>
            </div>
        );
    }
}

export default CartDisplay;
