import './auth.styles.scss'

import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

export const Auth = () => {
    return (
        <div className="auth">
            <div className="auth-container">
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}
