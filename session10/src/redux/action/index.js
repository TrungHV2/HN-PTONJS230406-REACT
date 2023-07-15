export const actionType = {
    cart: {
        CART_ADD: "CART_ADD",
        CART_UPDATE: "CART_UPDATE",
        CART_REMOVE: "CART_REMOVE"
    }
}


export const cartAction = {
    add: (data) => {
        return {
            type: actionType.cart.CART_ADD,
            payload: data
        }
    }
}