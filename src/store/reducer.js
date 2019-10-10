

const initialState = {
    products: [
        {
            name: 'Product 1',
            price: 100,
            id: 1,
            image: "https://images.zakupka.com/i3/firms/27/109/109838/thumb_abfa151b0484cef_300x300.jpg",
            isAddedToCart: false
        },
        {
            name: 'Product 2',
            price: 130,
            id: 2,
            image: "data:image/jpeg;base64,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",
            isAddedToCart: false
        },
        {
            name: 'Product 3',
            price: 150,
            id: 3,
            image: "data:image/jpeg;base64,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",
            isAddedToCart: false
        },
        {
            name: 'Product 4',
            price: 300,
            id: 4,
            image: "https://cdn.st100sp.com/cache_pictures/152851193/thumb300",
            isAddedToCart: false
        }
    ],
    isLoggedIn: false    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'LOG_OUT':
             localStorage.clear();
             return {
                ...state,
                isLoggedIn:false,
                products: state.products.map((product) => {
                    let productItem = {...product, isAddedToCart: false};
                    return productItem;
                })
           }
             
        case 'ADD_TO_CART':
            const localState = {
                ...state,
                products: state.products.map((product) => {
                    let productItem = product.id === action.item ? {...product, isAddedToCart: true} : product;
                    return productItem;
                })
           }
           localStorage.setItem(`CartState`, JSON.stringify(localState));
           return localState;
            
        case 'DELETE_FROM_CART':
            const deletedState = {
                ...state,
                products: state.products.map((product) => {
                    return product.id === action.item ? {...product, isAddedToCart: false} : product
                })
            }    
            localStorage.setItem('CartState', JSON.stringify(deletedState));
            return deletedState;
              
        case 'CHECK_LOG_IN_FROM_LOCAL_STORAGE':
            const newState = {
                ...state
            }
            newState.isLoggedIn = true;
            return newState;
        
        case 'UPDATE_STATE_FROM_LOCAL_STORAGE':
            const a = {
                ...action.localState
            }
            state = a;            
            return state;
            
            
        default: return state;
    }
        
}

export default reducer;