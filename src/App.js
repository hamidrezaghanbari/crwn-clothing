import { Home } from './pages/home/home.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.component'
import { Auth } from './pages/auth/auth.component';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import React, { Component } from 'react'
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect'
import Single from './pages/single/single.component';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/sign-in-sign-up" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Auth />)} />


          {/* <Route exact path="/topics" component={} />
          <Route path="/topics/:id" component={Home} /> */}
        </Switch>
      </div>
    )
  }
}

// state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


// actions
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)