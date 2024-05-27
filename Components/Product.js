import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Add"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {

        this.setState({
            buttonText: "Added"
        }, function () {
            setTimeout(() => {
                this.setState({
                    buttonText: "Add"
                });
            }, 2000);
        })
        this.props.addToCart();
    }


    render() {
        return (
            <div className="col-md-3">
                <div className="card text-center">
                    <div className="card-body">
                        
                        <h5 className="card-title">{this.props.itemName}</h5>
                        <h4 className="card-text price">${this.props.itemPrice}</h4>
                        <div className="stepper-input row gy-3">
                            <span className="decrement btn col-2" onClick={this.props.decreaseQuantity}>-</span>
                            <input className="quantity col text-center" value={this.props.itemQuantity} />
                            <span className="increment btn col-2" onClick={this.props.increaseQuantity}>+</span>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;