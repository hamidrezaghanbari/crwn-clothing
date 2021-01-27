import { faAngleLeft, faAngleRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux'
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <tr className="checkout-table-row">
            <td><img width="70" height="70" src={imageUrl} /></td>
            <td>{name}</td>
            <td>
                <FontAwesomeIcon onClick={() => removeItem(cartItem)} icon={faAngleLeft} />
                <span>  {quantity}  </span>
                <FontAwesomeIcon onClick={() => addItem(cartItem)} icon={faAngleRight} />
            </td>
            <td>${price}</td>
            <td><FontAwesomeIcon onClick={() => clearItem(cartItem)} icon={faTrash} /></td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
