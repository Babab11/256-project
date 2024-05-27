import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class ProductDisplay extends Component {

    render() {
        return (
            <div className="col-md-3">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.itemName}</h5>
                        <h4 className="card-text price">${this.props.itemPrice}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDisplay;