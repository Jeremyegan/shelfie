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

    handleEditClick = e => {
        this.setState({
            edit: true
        })
    }

    handleDeleteClick = () => {
        this.props.deleteProduct(this.state)
        this.setState({
            edit: false
        })
    }

    handleUpdateClick = () => {
        this.props.updateProduct(this.state)
        this.setState({
            edit: false
        })
    }
    

    render() {
        return this.state.edit ? (
            <div className="input">
                <img src={this.state.product.imageUrl} alt="" width="25vw" />
                <form id="formBox">
            <input className="img" value={this.state.imageUrl} onChange={this.handleChange}>Image URL:</input><br />
            <input className="name" value={this.state.name} onChange={this.handleChange}>Product Name:</input><br />
            <input className="price" value={this.state.price} onChange={this.handleChange}>Price:</input><br />
            <button className="formButton" onClick={this.handleAddClick}>Update Product</button>
            <button className="formButton" onClick={this.handleCancelClick}>Cancel</button>
            </form>
            </div>
        ) : (
            <div className="product">
                <img src={this.state.product.imageUrl} alt="" width="25vw" />
                <button className="productButton" onClick={this.handleDeleteClick}>Delete</button>
                <button className="productButton" onClick={this.handleUpdateClick}>Edit</button>
            </div>
        )
    }
}

export default Products