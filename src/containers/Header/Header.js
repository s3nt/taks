import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

class Header extends React.Component {
    
    render () {
        const count = this.props.products.filter(item => {
          return item.isAddedToCart;
        }).length;
        return (
            <header className={styles.Header}>
              <nav>
                <span className={styles.Button}>
                  <Link className={styles.Link} to="/cart">Cart 
                    <span className={styles.Count}>{count}</span>
                  </Link>
                </span>
                
                <span className={styles.Button} onClick={this.props.onLogOut}>Log Out</span>
              </nav>
            </header>
        )
    }
    
}

const mapStateToProps = state => {
  return {
      products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLogOut: () => dispatch(actionCreators.logOutAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
