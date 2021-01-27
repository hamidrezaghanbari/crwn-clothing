import React from 'react'
import './form-input.styles.scss'

export const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="input-group">
        {/* <label htmlFor="email">{label}</label> */}
        {
            label ? (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
        <input
            className="form-input"
            onChange={handleChange}
            {...otherProps}
        />
    </div>
)
