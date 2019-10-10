const LOG_IN = 'LOG_IN';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const LOG_OUT = 'LOG_OUT';
const CHECK_LOG_IN_FROM_LOCAL_STORAGE = 'CHECK_LOG_IN_FROM_LOCAL_STORAGE';
const UPDATE_STATE_FROM_LOCAL_STORAGE = 'UPDATE_STATE_FROM_LOCAL_STORAGE';

export const logIn = () => {
    return {
        type: LOG_IN
    };
}

export const logInAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logIn());
        }, 1000)
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    };
}

export const logOutAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, 1000)
    }
}

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        item: id
    }
}

export const addToCartAsync = (id) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addToCart(id));
        }, 500)
    }
}

export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        item: id
    }
}

export const deleteFromCartAsync = (id) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(deleteFromCart(id));
        }, 500)
    }
}

export const checkLogInFromLocalStorage = () => {
    return {
        type: CHECK_LOG_IN_FROM_LOCAL_STORAGE
        
    }
}

export const checkLogInFromLocalStorageAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(checkLogInFromLocalStorage());
        }, 50)
    }
}

export const updateStateFromLocalStorage = (st) => {
    return {
        type: UPDATE_STATE_FROM_LOCAL_STORAGE,
        localState: st
        
    }
}

export const updateStateFromLocalStorageAsync = (st) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(updateStateFromLocalStorage(st));
        }, 50)
    }
}

