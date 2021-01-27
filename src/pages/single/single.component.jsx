import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selectors'
import './single.styles.scss'

const Single = ({ match: { params }, collection }) => {
    const { title, items } = collection
    return (
        <div>
            {params.directory}
            <h2>{title}</h2>
            <div className="collection-preview-container">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.directory)(state)
})

export default connect(mapStateToProps)(Single)
