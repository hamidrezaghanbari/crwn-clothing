import React, { Component } from 'react'
import './shop.styles.scss'
import Collection from '../../components/collection/collection.component'
import { Route } from 'react-router-dom'
import Single from '../single/single.component'

const Shop = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={Collection} />
            <Route exact path={`${match.path}/:directory`} component={Single} />
        </div>
    )
}

export default Shop
