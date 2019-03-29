import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
    
       


    handleNavClick = () => {
        let product = this.state

        this.props.handleAddProduct(product)
    }


    render() {
        return (
            <div>
            <Link to="/"><button className="navButton" onClick={this.handleNavClick}>Dashboard</button></Link><br />
            <Link to="/add"><button className="navButton" onClick={this.handleNavClick}>Add Inventory</button></Link>
            </div>
        )
    }
}

export default Header;