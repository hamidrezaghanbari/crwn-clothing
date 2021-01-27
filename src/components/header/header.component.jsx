import React from 'react'
import logo from './../../assets/images/logo.png'
import menu from './../../assets/images/menu.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './header.styles.scss'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { auth } from './../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
    <div className="menu">
        <nav>
            <div className="menu-holder">
                <img id="menu-img" src={menu} alt="" />
            </div>
            <ul className="menu-list">
                <li><Link to="/shop">SHOP</Link></li>
                {
                    currentUser ? <li onClick={() => auth.signOut()}><span>SIGN OUT</span></li>
                        : <li><Link to="/sign-in-sign-up">SIGN IN / SIGN UP</Link></li>
                }
                <li><CartIcon /></li>
            </ul>
        </nav>
        {
            hidden ? <CartDropdown /> : null
        }


        <div className="logo-holder">
            <Link to="/"><img id="logo-img" src={logo} alt="" /></Link>
        </div>

    </div>
)


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)