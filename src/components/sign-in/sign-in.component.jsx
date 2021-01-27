import React, { Component } from 'react'
import { CustomButton } from '../custom-button/custom-button.component'
import { FormInput } from '../form-input/form-input.component'
import './sign-in.styles.scss'
import { auth, signInWithGoogle } from './../../firebase/firebase.utils'


export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    // handle submit form
    handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password}= this.state
        
        try {
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

    }

    // handle change
    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="auth-form">
                <h1>SIGN IN</h1>
                <p>sign to my website to buy cloth</p>
                <form onSubmit={this.handleSubmit} className="form">


                    <FormInput
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="email"
                        name="email"
                        type="email" />

                    <FormInput
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="password"
                        name="password"
                        type="password" />

                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" isGoogleButton onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                </form>
            </div>
        )
    }
}
