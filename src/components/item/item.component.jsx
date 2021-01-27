import React from 'react'
import './item.styles.scss'
import { Link } from 'react-router-dom'

export const Item = ({ title, subTitle = "SHOP NOW", imageUrl, linkUrl }) => {
    return (
        <div className="item" >
            <div className="item-background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="item-body">
                    <Link to={linkUrl} className="title">{title.toUpperCase()}</Link>
                    <span className="subtitle">{subTitle}</span>
                </div>
            </div>
        </div>
    )
}
