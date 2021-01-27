import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartPrice } from '../../redux/cart/cart.selectors'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faTrash } from "@fortawesome/free-solid-svg-icons"
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

const Checkout = ({ cartItems, cartPrice }) => {
    return (
        <div className="checkout-page">
            <h2>checkout your cart</h2>

            <table className="checkout-table">
                <thead >
                    <tr className="checkout-table-header">
                        <th>Product</th>
                        <th>description</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>remove</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cartItems.length ?
                            cartItems.map((cartItem, index) => {
                                return (
                                    <CheckoutItem key={index} cartItem={cartItem} />
                                )
                            }) : <tr >
                                <td colSpan="5" className="empty-table-text">there is no item in your cart</td>
                            </tr>
                    }
                    <tr className="checkout-table-footer">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>TOTAL: ${cartPrice}</b></td>
                    </tr>
                </tbody>


            </table>

            <StripeButton price={cartPrice} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartPrice: selectCartPrice
})

export default connect(mapStateToProps)(Checkout)