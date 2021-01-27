import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
    return (
        <li>
            <div className="cart-item-detail">
                <span>
                    {name}
                </span>
                <p>
                    {quantity} * ${price}
                </p>
            </div>
            <img width="50" height="50" src={imageUrl} alt="" />
        </li>
    )
}

export default CartItem