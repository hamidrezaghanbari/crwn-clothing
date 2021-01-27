import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IE6lxL3HnzAxrjxpLObBxxFjS6kxO41mDLrJJmngzX18iwIxz7WQZPy5fgNZ34EBYYYdbJkbrE0hdKKOeWG2hHx0062Zec3wr'
    
    const onToken = token => {
        console.log(token, 'token')
        alert('payment is successful')
    }
    
    return (
        <StripeCheckout label="pay now" name="crwn shop" billingAddress shippingAddress
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel="pay now"
        token={onToken}
        stripeKey={publishableKey} />
    )
}

export default StripeButton
