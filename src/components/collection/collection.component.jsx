import "./collection.styles.scss"

import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"
import { CollectionPreview } from "../collection-preview/collection-preview.component"

const Collection = ({collections}) => {
    return (
        <div>
            {
                collections.map(({ id, ...otherData }) => (

                    <CollectionPreview key={id} {...otherData} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(Collection)
