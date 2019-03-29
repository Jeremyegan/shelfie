import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            imageUrl: '',
            name: '',
            price: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }


    handleAddClick = () => {
        let product = this.state

        this.props.handleAddProduct(product)
    }

    handleCancelClick = () => {
        let product = this.state

        this.props.handleClearInput(product)
    }


    render() {
        return (
            <div className="formBox">
            <img src={this.state.imageUrl} alt="" width="25vw" />
            <input className="img" placeholder="" onChange={this.handleChange}>Image URL:</input><br />
            <input className="name" placeholder="" onChange={this.handleChange}>Product Name:</input><br />
            <input className="price" placeholder="0" onChange={this.handleChange}>Price:</input><br />
            <button className="formButton" onClick={this.handleAddClick}>Add Inventory</button>
            <button className="formButton" onClick={this.handleCancelClick}>Add Inventory</button>
            </div>
        )
    }
}

export default Form