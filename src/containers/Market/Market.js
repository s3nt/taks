import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions';

import styles from './Market.module.css';


class Market extends Component {

    state = {
        redirect: false,
        updatedState: false
    }
    
    componentDidMount() {
        if (localStorage.getItem('CartState') && this.state.updatedState === false) {
            this.setState({
                ...this.state,
                updatedState: true
            });
           const storage = JSON.parse(localStorage.getItem('CartState'))
           this.props.onUpdate(storage); 
           console.log('update');
        }
    }


    toCartHandler = () => {
        this.setState({
          ...this.state,
          redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/cart' />
        }
    }

    render() {
        let redirect = null;
        if (!this.props.logged) {
            redirect = <Redirect to='/login' />
        }
        const productList = this.props.products.map(product => {
            return (
                <div className={styles.ProductItem} key={product.id}>
                    <img className={styles.Image} src={product.image} alt={product.name}></img>
                    <div className={styles.ProductList}>
                        <h3 className={styles.ProductName}>{product.name}</h3>
                        <span className={styles.Price}>{product.price}$</span>
                        {
                            product.isAddedToCart 
                            ? <div>{this.renderRedirect()}
                                <button 
                                    className={styles.CartButton} 
                                    onClick={this.toCartHandler}>Go to Cart
                                </button>
                              </div>
                            : <button 
                                onClick={() => this.props.onAdd(product.id)} 
                                className={styles.Button}>Add to cart
                              </button>
                        }
                        
                    </div>
                </div>
            );
        })
        return (
            <div className={styles.Container}>
                {productList}
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
        onAdd: (id) => dispatch(actionCreators.addToCartAsync(id)),
        onUpdate: (st) => dispatch(actionCreators.updateStateFromLocalStorageAsync(st))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);