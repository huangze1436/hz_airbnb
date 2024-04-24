const initialState = {
    currentPage:1
}
function reducer(state=initialState , action)
{
    switch(action.type)
    {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }
}

export default reducer