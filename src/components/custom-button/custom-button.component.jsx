import React from 'react'
import './custom-button.styles.scss'

export const CustomButton = ({children, isGoogleButton, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted': ''} ${isGoogleButton ? 'google-button': ''} form-button`} {...otherProps}>{children}</button>        
)
