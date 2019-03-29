import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Form from './components/Form';
import Header from './components/Header'

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

  createProduct = inventory => {
    axios.post('/api/inventory', inventory).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => {
      console.log('an error occurred while adding product:', err)
    })
  }

  deleteProduct = id => {
    axios.delete(`/api/inventory/${id}`)
    .then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => {
      console.log('could not delete product:', err)
    })
  }

  updateProduct = inventory => {
    axios.put(`/api/incentory/${inventory.id}`, inventory).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

 


  componentDidMount() {
    axios.get('./api/inventory').then(res => {
        this.setState({
          inventory: res.data,
        })
    }).catch(err => {
        console.log('could not mount', err)
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <Dashboard />
        <Form />
        <Product 
        inventory={this.state.inventory}
        createProduct={this.createProduct}
        deleteProduct={this.deleteProduct}
        updateProduct={this.updateProduct}/>
      </div>
    );
  }
}

export default App;
