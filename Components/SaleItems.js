import React, { Component } from 'react';
import ProductDisplay from './ProductDisplay';
import Inventory from './Inventory.json';


class SaleItems extends Component {

    render() {
        return (
            <div className="row row-gap-4">
                        {
                            Inventory
                                .filter(item => item.price < 20)
                                .map((item, index) => (
                                    <ProductDisplay
                                    key={item.id}
                                    itemPic={item.image}
                                    itemName={item.item}
                                    itemPrice={item.price}
                            />
                        ))
                        }
            </div>
        );
    }
}

export default SaleItems;