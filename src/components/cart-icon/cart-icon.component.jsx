import "./cart-icon.styles.scss"
import cart from './../../assets/images/cart.png'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartCount } from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from 'reselect'

const CartIcon = ({ toggleCartHidden, cartCount }) => (
    <div className="cart-icon-holder" onClick={toggleCartHidden}>
        <span><img src={cart} alt="" /></span>
        <span className="cart-count">{cartCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)