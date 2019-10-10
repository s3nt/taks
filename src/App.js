import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import Login from './containers/Login/Login';
import Cart from './containers/Cart/Cart';
import Market from './containers/Market/Market';
import * as actionCreators from './store/actions';


class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('Password') && localStorage.getItem('LogIn')) {
      this.props.onLoggedIn();
    }
  }

  render () {
    
    return (
      <div>
        
        <Layout>
          <Route exact path="/" render={() => <Redirect to='/login'/>} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/market" component={Market} />
        </Layout>  
      </div>  
      
    );
  }
  
}

const mapStateToProps = state => {
  return {
      oldState: state,
      isLogged: state.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLoggedIn: () => dispatch(actionCreators.checkLogInFromLocalStorageAsync())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
