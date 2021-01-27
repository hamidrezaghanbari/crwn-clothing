import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item } from '../item/item.component'
import './body.styles.scss'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Body = ({ sections }) => {
    return (
        <div className="body">
            <div className="row-one">
                {
                    sections.filter((item, index) => index < 3).map(({ title, linkUrl, imageUrl }, index) => (

                        <Item key={index} title={title} linkUrl={linkUrl} imageUrl={imageUrl} />
                    ))
                }
            </div>

            <div className="row-two">
                {
                    sections.filter((item, index) => 3 < item.id).map(({ title, linkUrl, imageUrl }, index) => (

                        <Item key={index} title={title} linkUrl={linkUrl} imageUrl={imageUrl} />
                    ))
                }

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Body)
