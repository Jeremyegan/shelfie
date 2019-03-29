import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.product.id,
            imageUrl: props.product.imageUrl,
            name: props.product.name,
            price: props.product.price,
            edit: false
        }
        
    }
    

    render() {
        return (
            <div>
                <img src={this.props.product.imageUrl} alt="" width="25vw" />
            </div>
        )
    }
}

export default Products