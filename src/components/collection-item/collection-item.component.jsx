import React from 'react'
import './collection-item.styles.scss'
import { CustomButton } from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item

    return (
        <div className="collection-item">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="collection-item-image-holder">
                <div className="add-to-card-section">
                    <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
                </div>
            </div>
            <div className="collection-item-detail">
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)