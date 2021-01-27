import { createSelector } from 'reselect'

// input selector (get hole state and return slice of it)
const selectCart = state => state.cart

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// output selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulated, cartItem) => accumulated + cartItem.quantity, 0)
)

export const selectCartPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulated, item) => accumulated + (item.quantity * item.price), 0)
)