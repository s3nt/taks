import React from 'react';
import { connect } from 'react-redux';

import Header from '../../containers/Header/Header';

class Layout extends React.Component {
    
    render () {
        const header = this.props.isLogged ? <Header /> : null;
        return (
            <React.Fragment>
                {header}
                <main>{this.props.children}</main>
            </React.Fragment>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        isLogged: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Layout);
