import React, { Component } from 'react'
import { CustomButton } from '../custom-button/custom-button.component'
import { FormInput } from '../form-input/form-input.component'
import './sign-up.styles.scss'

import { auth, createUserProfileDocument } from './../../firebase/firebase.utils'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    // handle submit form
    handleSubmit = async e => {
        e.preventDefault()

        if (this.state.password !== this.state.confirmPassword) {
            alert('password is dont match to confirm password')
            return
        }

        try {
            const { user } =
                await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)

            await createUserProfileDocument(user, { 'displayName': this.state.displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
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
                <h1>SIGN UP</h1>
                <p>to be part of us sign up in website</p>
                <form onSubmit={this.handleSubmit} className="form">
                    <FormInput
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        placeholder="display Name"
                        name="displayName"
                        type="text" />

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

                    <FormInput
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        placeholder="confirm password"
                        name="confirmPassword"
                        type="password" />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
