import React, { Component } from 'react';
import CartDisplay from './CartDisplay';
import InvoiceDisplay from './InvoiceDisplay';

class Checkout extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#checkoutPlane">
                    Checkout
                </button>

                <div className="modal fade" id="checkoutPlane" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="checkoutPlane" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="checkoutPlaneTitle">Cart and Checkout</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h3>Cart</h3>
                                        <CartDisplay 
                                            Inventory={this.props.Inventory}
                                            increaseQuantity={this.props.increaseQuantity}
                                            decreaseQuantity={this.props.decreaseQuantity}
                                        />
                                    </div>
                                    <div className="col-lg-8 form">
                                        <h3>Checkout</h3>
                                        
                                        <h4>Billing Address</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label htmlFor="firstName">First Name</label>
                                                <input type="text" className="form-control" id="firstName" placeholder="John" />
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input type="text" className="form-control" id="lastName" placeholder="Smith" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="address">Address Line 1</label>
                                                <input type="text" className="form-control" id="address" placeholder="123 Main Street" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="addressExtra">Address Line 2</label>
                                                <input type="text" className="form-control" id="addressExtra" placeholder="Apartment 1A" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor="country">Country</label>
                                                <input type="text" className="form-control" id="country" placeholder="US" disabled/>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="state">State</label>
                                                <input type="text" className="form-control" id="state" placeholder="PA" disabled/>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="zip">Zip</label>
                                                <input type="text" className="form-control" id="zip" placeholder="12345"/>
                                            </div>
                                        </div>
                                        <h4>Payment</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <label htmlFor="nameOnCard">Name on Card</label>
                                                <input type="text" className="form-control" id="nameOnCard" placeholder="John Smith"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="cardNumber">Card Number</label>
                                                <input type="text" className="form-control" id="cardNumber" placeholder="1234 1234 1234 1234"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="expiration">Expiration</label>
                                                <input type="text" className="form-control" id="expiration" placeholder="01/25"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="CVV">CVV</label>
                                                <input type="text" className="form-control" id="CVV" placeholder="123"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="invoicePlane" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="invoicePlane">Your order is on its way!</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <InvoiceDisplay 
                                    Inventory={this.props.Inventory}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;