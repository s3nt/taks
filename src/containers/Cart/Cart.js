import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Cart.module.css';
import { Link, Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions';

class Cart extends Component {
    render() {
        let redirect = null;
        if (!this.props.logged) {
            redirect = <Redirect to='/login' />
        }
        const listOfPurchases = this.props.products
            .filter(product => product.isAddedToCart)
            .map(product => {
                return (
                    <div key={product.id} className={styles.CartItem}>
                        <p>{product.name}</p>
                        <p>Price: {product.price}</p>
                        <button onClick={() => this.props.onDelete(product.id)} className={styles.Button}>Delete from Cart</button>
                    </div>
                )
            })
        const noProducts = (
            <div>
                <h2>Nothing added to cart</h2>
                <p>Add some at <Link className={styles.Link} to='/market'>market</Link></p>
            </div>
            
        )    
        return (
            <div className={styles.Cart}>
                {listOfPurchases.length > 0 ? listOfPurchases : noProducts}
                {redirect}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        logged: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => dispatch(actionCreators.deleteFromCartAsync(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
