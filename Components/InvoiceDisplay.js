import React, { Component } from 'react';
import InvoiceItem from './InvoiceItem';

class InvoiceDisplay extends Component {
    render() {
        const { Inventory } = this.props;

        const filteredInventory = Inventory.filter(item => item.quantity > 0);

        const subtotal = filteredInventory.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);

        const tax = subtotal * .06;
        const total = subtotal + tax;

        return (
            <div>
                {filteredInventory.map(item => (
                    <div key={item.id}>
                        <InvoiceItem
                            itemPic={item.image}
                            itemName={item.item}
                            itemPrice={item.price}
                            itemQuantity={item.quantity}
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

export default InvoiceDisplay;
