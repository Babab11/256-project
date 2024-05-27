import React, { Component } from 'react';

class InvoiceItem extends Component {
    render() {
        return (
            <div className="row w-100">
                <div className="col-3">{this.props.itemName}</div>
                <input className="text-center" value={this.props.itemQuantity} readOnly />
                <div className="col-2">${this.props.itemPrice * this.props.itemQuantity}</div>
            </div>
        );
    }
}

export default InvoiceItem;